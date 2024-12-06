const createRoutes = (server, method, URI, handler) => {
  if (typeof server[method] === 'function') {
    server[method](URI, handler);
  } else {
    console.error(`Invalid HTTP method: ${method}`);
  }
};

export default createRoutes;
