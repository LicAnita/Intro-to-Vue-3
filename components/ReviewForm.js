app.component("review-form", {
  // usamos un vmodel para hacer una unión de ida y vuelta
  template:
    /*html*/
    `  <form action="" class="review-form" @submit.prevent='onSubmit'>
        <h3></h3>
        <label for="name">Name: </label>
        <input type="text" id="name" v-model='name'/>
        
        <label
        for="review"
        >Review: </label
        >
        <textarea name="review" id="review" v-model='review'></textarea>
        
        <label for="rating">Rating: </label>
        <select name="" id="rating" v-model.number='rating'>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input type="submit" class="button" value="Submit">
    </form>`,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
    };
  },
  methods: {
    onSubmit() {
        if(this.name === '' || this.review ==='' || this.rating===''){
            alert('Please fill in all fields')
            return
        }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      this.$emit("review-submitted", productReview);
      this.name = "";
      this.review = "";
      this.rating = null;
    },
  },
});
