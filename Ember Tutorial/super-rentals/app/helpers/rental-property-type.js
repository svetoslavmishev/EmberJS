import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([proptype]) {
  if (communityPropertyTypes.includes(proptype)) {
    return 'Community';
  }

  return 'Standalone';
}

export default helper(rentalPropertyType);
