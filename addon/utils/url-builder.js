import querystring from 'querystring';

export default function(url, path, queryParams) {
  let query = querystring.encode(queryParams);
  let pathUrl = url.charAt(url.length - 1) === '/' ? `${url}${path}` : `${url}/${path}`;

  return query ? `${pathUrl}?${query}` : pathUrl;
}
