(function() {
  document.getElementById('search-form').onsubmit = function (evt) {
     var input = document.getElementById('search-form-trm').value;
        window.open('http://opac.sub.uni-goettingen.de/DB=1/SET=7/TTL=1/CMD?ACT=SRCHA&IKT=1016&SRT=YOP&TRM='+input+'+and+erj+1600-1899');
        return false;
  };
}());
