export const BrandingTypes = {
  FETCH_BRANDING: 'FETCH_BRANDING',
};

export const BrandingActions = {
  fetchBranding: response => ({
    type: BrandingTypes.FETCH_BRANDING,
    payload: response,
  }),
};
