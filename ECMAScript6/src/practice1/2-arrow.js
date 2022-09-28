export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    console.log(this.sanFranciscoNeighborhoods);
  
    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
      return self.sanFranciscoNeighborhoods;
    };
  }
