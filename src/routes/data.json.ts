import db from '$lib/database';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
  return {
    body: {
      yeet: 'yuup'
    }
  }
}