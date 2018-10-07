export default function () {
  this.namespace = 'api';

  let rentals = [{
    type: 'rentals',
    id: 'jevington-way',
    attributes: {
      title: 'Jevington Way, London',
      owner: 'Houseshop',
      city: 'London',
      category: 'Estate',
      bedrooms: 1,
      image: 'https://pdmllp.s3.amazonaws.com/5f22c4fb93fd2ee83cb8b137fa28fb62_810_420.jpg',
      description: "The area itself benefits from being in a very quiet, peaceful location with views out of the back of the property of fields."
    }
  }, {
    type: 'rentals',
    id: 'grand-old-mansion',
    attributes: {
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      category: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
    }
  }, {
    type: 'rentals',
    id: 'urban-living',
    attributes: {
      title: 'Urban Living',
      owner: 'Mike Teavee',
      city: 'Seattle',
      category: 'Condo',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
    }
  }, {
    type: 'rentals',
    id: 'downtown-charm',
    attributes: {
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      category: 'Apartment',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
    }
  }];

  this.get('/rentals', function (db, request) {
    if (request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function (rental) {
        return rental.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
}