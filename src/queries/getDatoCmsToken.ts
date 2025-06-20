// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;
const defaultToken = "8ddfa684505af65a7a6e30a2e35e76";
  switch (hostname) {
    case 'ror.sumanthsamala.com':
    case 'sumanthsamala.com':
    case 'ror.localhost':
    case 'localhost':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    case 'java.sumanthsamala.com':
    case 'java.localhost':
      return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';

    case 'frontend.sumanthsamala.com':
    case 'frontend.localhost':
      return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';

    case 'node.sumanthsamala.com':
    case 'node.localhost':
      return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';

    case 'himanshup012.onrender.com':  // Add this line for your Render hostname
      const renderToken = process.env.REACT_APP_DATOCMS_RENDER_TOKEN ?? defaultToken;
      console.log("Using Render Token:", renderToken);
      return renderToken;  // Return the correct token

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
