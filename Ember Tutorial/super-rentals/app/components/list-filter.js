import Component from '@ember/component';

export default Component.extend({
  className: ['list-filter'],
  value: '',
  init() {
    this._super(...arguments);
    this.filter('').then(allResults => this.set('results', allResults.results));
  },
  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then(filterResults => {
        if (filterResults.query === filterInputValue) {
          this.set('results', filterResults.results);
        }
      });
    }
  }
});
