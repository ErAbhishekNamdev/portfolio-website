// netlify/functions/log-visit.js
// Logs visitor interaction data whenever the welcome popup is interacted with.
// Data captured: action taken, page, time, referrer, IP, browser (user-agent).
// View logs in: Netlify Dashboard → Functions → log-visit → Logs

exports.handler = async (event) => {
  // Only accept POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    const visitor = {
      action:   body.action   || 'unknown',
      page:     body.page     || '/',
      time:     body.time     || new Date().toISOString(),
      referrer: body.referrer || 'direct',
      ip:       event.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown',
      browser:  event.headers['user-agent'] || 'unknown',
      country:  event.headers['x-country']  || 'unknown',  // Netlify CDN header
    };

    // ── Log to Netlify Function console (visible in dashboard) ──
    console.log('[PORTFOLIO VISITOR]', JSON.stringify(visitor, null, 2));

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('[log-visit error]', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to log visit' }) };
  }
};
