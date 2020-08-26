const solve = (st,a,b) => {
  const sst = st.split('');
  const sst1 = sst.slice(a, ++b).reverse();
  const sst2 = sst.slice(0, a);
  const sst3 = sst.slice(b, st.length);
  return [...sst2, ...sst1, ...sst3].join('');
};