const storageService = {
  getItem: function(key){
    return JSON.parse(localStorage.getItem(key));
  },
};

export default storageService;