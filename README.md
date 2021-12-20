# BONUS: CSS Kitten Wheelbarrow

## Learning Goals

- Position elements absolutely
- Practice using CSS selectors

## Introduction

Oh no! All of our kittens have escaped from the wheelbarrow and we need to get
them back in. Help collect all the kittens and put them into the wheelbarrow
using CSS selectors and absolute positioning.

## Getting Started

Fork and clone this lesson into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

## Position Elements Absolutely

There are a few different ways we can use CSS to position elements in our web
pages. _Absolute_ positioning means placing the element in its containing
element in a certain location that will stay the same no matter where other
elements are placed. We can use absolute positioning to specify _exactly_ where
in the document layout we want an element to be placed:

![absolute positioning diagram](https://curriculum-content.s3.amazonaws.com/phase-0/phase-0-css-kitten-lab/absolute-position.png)

Here's an example of what absolute positioning looks like in CSS:

```css
.parent-element {
  position: relative;
}

.child-element {
  position: absolute;
  top: 50px;
  left: 50px;
}
```

> **Note** When using `position: absolute`, the browser calculates the position
> using top/left from the closest parent element that has a position specified —
> that's why in the example, we're specifying `position: relative` for the
> parent element. Check out the resources on positioning for more info on this
> if you're interested!

For this lab, we've done the work of calculating the absolute positions and
creating CSS rules for a bunch of different kitten image elements. It's your job
to use CSS selectors to apply the correct positioning to each of these elements.

To get started with this lab, open the `index.html` file in the browser. Use the
comments in `css/place-kitty.css` to write the correct selectors to move each
kitty into the wheelbarrow.

## Conclusion

Nice work getting practice with more CSS selectors, and learning about absolute
positioning along the way! Now that you've seen absolute positioning in action,
you'll have a better sense of when you might need to use it to build more
complex CSS layouts in the future.

## Resources

- [Mozilla Developer Network: CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
- [W3 CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)
- [Mozilla Developer Network: Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
