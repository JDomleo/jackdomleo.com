export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'home') {
    return '/';
  }

  return '/not-found';
};