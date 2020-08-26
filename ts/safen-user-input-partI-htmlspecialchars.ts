export const htmlspecialchars = (formData: string): string => {
  formData = formData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  return formData;
};
