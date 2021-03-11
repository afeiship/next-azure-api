(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.rc inject default', function () {
      nx.rc(null);
      expect('blank' in nx.$rc).toBe(true);
    });
  });
})();
