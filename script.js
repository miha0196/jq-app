// require

document.addEventListener("DOMContentLoaded", () => {

  function changeColorCreator(prop, red, green, blue) {
    this.prop = prop;
    this.red = red;
    this.green = green;
    this.blue = blue;

    this.changeColor = function (color, value) {
      if (color === "red") {
        this.red = value;
      } 

      if (color === "green") {
        this.green = value;
      }

      if (color === "blue") {
        this.blue = value;
      }

      return `rgb(${this.red},${this.green},${this.blue})`
    }

    this.getRedColor = () => this.red
    this.getGreenColor = () => this.green;
    this.getBlueColor = () => this.blue;
  }

  const changeBGColor = new changeColorCreator("background-color", 255, 255, 255);
  const changeTextColor = new changeColorCreator("color", 0, 0, 0);

  let prop = "background-color";

  $(".ui-button").on("click", function (e) {
    prop = e.target.getAttribute("data-prop");

    if (prop === "color") {
      $("#red").slider("value", changeTextColor.getRedColor());
      $("#green").slider("value", changeTextColor.getGreenColor());
      $("#blue").slider("value", changeTextColor.getBlueColor());
    } else {
      $("#red").slider("value", changeBGColor.getRedColor());
      $("#green").slider("value", changeBGColor.getGreenColor());
      $("#blue").slider("value", changeBGColor.getBlueColor());
    }
  });
  
  $("#red").slider({
    value: 255,
    max: 255,
    slide: function (_, { value }) {

      if (prop === "color") {
        $(".text-content").css(prop, changeTextColor.changeColor("red", value));
      }

      if (prop === "background-color") {
        $(".text-content").css(prop, changeBGColor.changeColor("red", value));
      }
    },
  });

  $("#green").slider({
    value: 255,
    max: 255,
    slide: function (_, { value }) {
      
      if (prop === "color") {
        $(".text-content").css(prop, changeTextColor.changeColor("green", value));
      }

      if (prop === "background-color") {
        $(".text-content").css(prop, changeBGColor.changeColor("green", value));
      }
    },
  });

  $("#blue").slider({
    value: 255,
    max: 255,
    slide: function (_, { value }) {
      
      if (prop === "color") {
        $(".text-content").css(prop, changeTextColor.changeColor("blue", value));
      }

      if (prop === "background-color") {
        $(".text-content").css(prop, changeBGColor.changeColor("blue", value));
      }
    },
  });
})