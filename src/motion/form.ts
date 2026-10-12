import { listen, qs, qsa } from './core';

export const DEMO_SUBMIT_DELAY_MS = 1200;
export const DEMO_FAIL_MARKER = 'fail@';

export function initForm() {
  qsa('[data-form-btn]').forEach((btn) => {
    listen(btn, 'click', (e) => {
      e.preventDefault();
      const form = btn.closest('form');
      if (!form) return;
      const labels = qsa("[hover='text']", btn);
      const sending = () => labels.forEach((l) => (l.textContent = 'Sending...'));
      form.addEventListener('submit', sending, { once: true });
      form.requestSubmit();
      setTimeout(() => form.removeEventListener('submit', sending), 0);
    });
  });

  qsa<HTMLInputElement>('.input_field').forEach((field) => {
    const label = field.parentElement?.querySelector('.input_label');
    if (!label) return;
    listen(field, 'focusin', () => label.classList.add('focused'));
    listen(field, 'focusout', () => {
      if (!field.value.trim()) label.classList.remove('focused');
    });
  });

  qsa<HTMLInputElement>('input[type="tel"]').forEach((input) =>
    listen(input, 'input', () => (input.value = input.value.replace(/[^\d+-]/g, ''))),
  );
  qsa<HTMLInputElement>('input[name="Name"]').forEach((input) =>
    listen(input, 'input', () => (input.value = input.value.replace(/[\d!@#$%^&*()_+=[\]{};:'"\\|,.<>/?~`]/g, ''))),
  );

  qsa<HTMLFormElement>('form.form_block').forEach((form) => {
    const wrap = form.closest('.w-form');
    const done = wrap && qs('.w-form-done', wrap);
    const fail = wrap && qs('.w-form-fail', wrap);
    const btnLabels = qsa("[data-form-btn] [hover='text']", form);
    listen(form, 'submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (fail) fail.style.display = 'none';
      setTimeout(() => {
        const email = String(data.email ?? '');
        console.info('[demo] Booking form submitted locally — no request was sent.', data);
        if (email.includes(DEMO_FAIL_MARKER)) {
          if (fail) fail.style.display = 'block';
          btnLabels.forEach((l) => (l.textContent = 'Submit'));
          return;
        }
        form.style.display = 'none';
        if (done) done.style.display = 'block';
      }, DEMO_SUBMIT_DELAY_MS);
    });
  });
}

export function initUtmFields() {
  const title = qs<HTMLInputElement>('input[name="title"]');
  if (title) title.value = 'Deal from Era';
  const params = new URLSearchParams(window.location.search);
  const values: Record<string, string> = {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_url: params.get('utm_url') || '',
    page_url: window.location.href,
  };
  Object.entries(values).forEach(([name, value]) => {
    const input = qs<HTMLInputElement>(`input[name="${name}"]`);
    if (input) input.value = value;
  });
}
