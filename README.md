LESS Mixins
=============

I present to you a library of LESS mixins.

## How to use
```css
@import "mixins.less";
```

## List of mixins
* **Animation:**
	* [animation](#animation)
	* [animation-name](#animation-name)
	* [animation-duration](#animation-duration)
	* [animation-timing-function](#animation-timing-function)
	* [animation-delay](#animation-delay)
	* [animation-iteration-count](#animation-iteration-count)
	* [animation-direction](#animation-direction)
	* [animation-fill-mode](#animation-fill-mode)
* **Border:**
	* [border-radius](#border-radius)
	* [bordered](#bordered)
	* [rounded](#rounded)
* **Gradient:**
	* [gradient-v](#gradient-v)
	* [gradient-h](#gradient-h)
* **Shadow:**
	* [box-shadow](#box-shadow)
	* [inner-shadow](#inner-shadow)
	* [outer-shadow](#outer-shadow)
* **Size and position:**
	* [size](#size)
	* [square](#square)
	* [center-block](#center-block)
* **Transform:**
	* [rotate](#rotate)
	* [scale with one parameter](#scale with one parameter)
	* [scale with two parameters](#scale with two parameters)
	* [scaleX](#scaleX)
	* [scaleY](#scaleY)
	* [skewX](#skewX)
	* [skewY](#skewY)
	* [translate with one parameter](#translate with one parameter)
	* [translate with two parameters](#translate with two parameters)
	* [translateX](#translateX)
	* [translateY](#translateY)
* **Transition:**
	* [transition](#transition)
	* [transition-all](#transition-all)
	* [transition-property](#transition-property)
	* [transition-duration](#transition-duration)
	* [transition-timing-function](#transition-timing-function)
	* [transition-delay](#transition-delay)
* **Common:**
	* [box-sizing](#box-sizing)
	* [clear-fix](#clear-fix)
	* [hide](#hide)
	* [show](#show)
	* [inline-block](#inline-block)
	* [opacity](#opacity)
	* [user-select](#user-select)
	* [placeholder](#placeholder)

## &sect;&nbsp;Animation
### <a name="animation"></a>- animation
**Description:**
```css
.animation(@animation);
```

**Parameters:**

	@animation
		Set of parameters separated by spaces.
		Order of the parameters:
			animation-name
			animation-duration
			animation-timing-function
			animation-delay
			animation-iteration-count
			animation-directionanimation-fill-mode

**Example:**
```css
div {
	.animation(nameAnimation 3s linear 1s);
}
```

**CSS output:**
```css
div {
	-webkit-animation: nameAnimation 3s linear 1s;
	   -moz-animation: nameAnimation 3s linear 1s;
	     -o-animation: nameAnimation 3s linear 1s;
	        animation: nameAnimation 3s linear 1s;
}
```

### <a name="animation-name"></a>- animation-name
**Description:**
```css
.animation-name(@name);
```

**Parameters:**

	@name
		Specifies the name of the @keyframes animation.

**Example:**
```css
div {
	.animation-name(nameAnimation);
}
```

**CSS output:**
```css
div {
	-webkit-animation-name: nameAnimation;
	   -moz-animation-name: nameAnimation;
	     -o-animation-name: nameAnimation;
	        animation-name: nameAnimation;
}
```

### <a name="animation-duration"></a>- animation-duration
**Description:**
```css
.animation-duration(@duration);
```

**Parameters:**

	@duration
		Specifies how many seconds or milliseconds an animation takes to complete one cycle.

**Example:**
```css
div {
	.animation-duration(3s);
}
```

**CSS output:**
```css
div {
	-webkit-animation-duration: 3s;
	   -moz-animation-duration: 3s;
	     -o-animation-duration: 3s;
	        animation-duration: 3s;
}
```

### <a name="animation-timing-function"></a>- animation-timing-function
**Description:**
```css
.animation-timing-function(@timing-function);
```

**Parameters:**

	@timing-function
		Specifies the speed curve of the animation.

**Example:**
```css
div {
	.animation-timing-function(linear);
}
```

**CSS output:**
```css
div {
	-webkit-animation-timing-function: linear;
	   -moz-animation-timing-function: linear;
	     -o-animation-timing-function: linear;
	        animation-timing-function: linear;
}
```

### <a name="animation-delay"></a>- animation-delay
**Description:**
```css
.animation-delay(@delay);
```

**Parameters:**

	@delay
		Specifies when the animation will start.

**Example:**
```css
div {
	.animation-delay(1s);
}
```

**CSS output:**
```css
div {
	-webkit-animation-delay: 1s;
	   -moz-animation-delay: 1s;
	     -o-animation-delay: 1s;
	        animation-delay: 1s;
}
```

### <a name="animation-iteration-count"></a>- animation-iteration-count
**Description:**
```css
.animation-iteration-count(@iteration-count);
```

**Parameters:**

	@iteration-count
		Specifies the number of times an animation should be played.

**Example:**
```css
div {
	.animation-iteration-count(3);
}
```

**CSS output:**
```css
div {
	-webkit-animation-iteration-count: 3;
	   -moz-animation-iteration-count: 3;
	     -o-animation-iteration-count: 3;
	        animation-iteration-count: 3;
}
```

### <a name="animation-direction"></a>- animation-direction
**Description:**
```css
.animation-direction(@direction);
```

**Parameters:**

	@direction
		Specifies whether or not the animation should play in reverse on alternate cycles.

**Example:**
```css
div {
	.animation-direction(alternate);
}
```

**CSS output:**
```css
div {
	-webkit-animation-direction: alternate;
	   -moz-animation-direction: alternate;
	     -o-animation-direction: alternate;
	        animation-direction: alternate;
}
```

### <a name="animation-fill-mode"></a>- animation-fill-mode
**Description:**
```css
.animation-fill-mode(@fill-mode);
```

**Parameters:**

	@fill-mode
		Specifies what styles will apply for the element when the animation is not playing (when it is finished, or when it has a "delay").

**Example:**
```css
div {
	.animation-fill-mode(backwards);
}
```

**CSS output:**
```css
div {
	-webkit-animation-fill-mode: backwards;
	   -moz-animation-fill-mode: backwards;
	     -o-animation-fill-mode: backwards;
	        animation-fill-mode: backwards;
}
```

## &sect;&nbsp;Border
### <a name="border-radius"></a>- border-radius
**Description:**
```css
.border-radius(@topLeft: 0, @topRight: 0, @bottomRight: 0, @bottomLeft: 0);
```

**Parameters:**

	@topLeft (defaults to '0')
		Property for setting of the top-left corner of the element.
	@topRight (defaults to '0')
		Property for setting of the top-right corner of the element.
	@bottomRight (defaults to '0')
		Property for setting of the bottom-right corner of the element.
	@bottomLeft (defaults to '0')
		Property for setting of the bottom-left corner of the element.

**Example:**
```css
div {
	.border-radius(5px, 15px, 10px, 20px);
}
```

**CSS output:**
```css
div {
	-webkit-border-top-left-radius: 5px;
	    -moz-border-radius-topleft: 5px;
	        border-top-left-radius: 5px;
	-webkit-border-top-right-radius: 15px;
	    -moz-border-radius-topright: 15px;
	        border-top-right-radius: 15px;
	-webkit-border-bottom-right-radius: 10px;
	    -moz-border-radius-bottomright: 10px;
	        border-bottom-right-radius: 10px;
	-webkit-border-bottom-left-radius: 20px;
	    -moz-border-radius-bottomleft: 20px;
	        border-bottom-left-radius: 20px;
	-webkit-background-clip: padding-box;
       -moz-background-clip: padding;    
            background-clip: padding-box;
}
```

### <a name="bordered"></a>- bordered
**Description:**
```css
.bordered(@color: #eee, @width: 1px);
```

**Parameters:**

	@color (defaults to '#eee')
		Color of the border.
	@width (defaults to '1px')
		Width of the border.
	
**Example:**
```css
div {
	.bordered(#ccc, 2px);
}

p {
	.bordered();
}
```

**CSS output:**
```css
div {
	border: 2px solid #ccc;
}

p {
	border: 1px solid #eee;
}
```

### <a name="rounded"></a>- rounded
**Description:**
```css
.rounded(@radius: 5px);
```

**Parameters:**

	@radius (defaults to '5px')
		Radius of the all corner of the element.
	
**Example:**
```css
div {
	.rounded(2px);
}

p {
	.rounded();
}
```

**CSS output:**
```css
div {
	-webkit-border-radius: 2px;
	   -moz-border-radius: 2px;
	        border-radius: 2px;
	-webkit-background-clip: padding-box;
	   -moz-background-clip: padding;    
	        background-clip: padding-box;
}

p {
	-webkit-border-radius: 5px;
	   -moz-border-radius: 5px;
	        border-radius: 5px;
	-webkit-background-clip: padding-box;
	   -moz-background-clip: padding;    
	        background-clip: padding-box;
}
```

## &sect;&nbsp;Gradient
### <a name="gradient-v"></a>- gradient-v
**Description:**
```css
.gradient-v(@startColor: #eee, @endColor: #fff);
```

**Parameters:**

	@startColor (defaults to '#eee')
		Starting color of the gradient.
	@endColor (defaults to '#fff')
		End color of the gradient.
	
**Example:**
```css
div {
	.gradient-v(#aaa, #ddd);
}

p {
	.gradient-v();
}
```

**CSS output:**
```css
div {
	background: #aaa;
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#aaa), color-stop(100%,#ddd));
	background: -webkit-linear-gradient(top, #aaa 0%,#ddd 100%);
	background: -moz-linear-gradient(top, #aaa 0%, #ddd 100%);
	background: -ms-linear-gradient(top, #aaa 0%, #ddd 100%);
	background: -o-linear-gradient(top, #aaa 0%, #ddd 100%);
	background: linear-gradient(to bottom, #aaa 0%, #ddd 100%);
	filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=0)",#aaa,#ddd));
}

p {
	background: #eee;
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#eee), color-stop(100%,#fff));
	background: -webkit-linear-gradient(top, #eee 0%,#fff 100%);
	background: -moz-linear-gradient(top, #eee 0%, #fff 100%);
	background: -ms-linear-gradient(top,  #eee 0%, #fff 100%);
	background: -o-linear-gradient(top, #eee 0%, #fff 100%);
	background: linear-gradient(to bottom, #eee 0%, #fff 100%);
	filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=0)",#eee,#fff));
}
```

### <a name="gradient-h"></a>- gradient-h
**Description:**
```css
.gradient-h(@startColor: #eee, @endColor: #fff);
```

**Parameters:**

	@startColor (defaults to '#eee')
		Starting color of the gradient.
	@endColor (defaults to '#fff')
		End color of the gradient.
	
**Example:**
```css
div {
	.gradient-h(#aaa, #ddd);
}

p {
	.gradient-h();
}
```

**CSS output:**
```css
div {
	background: #aaa;
	background: -webkit-gradient(linear, left top, right top, color-stop(0%,#aaa), color-stop(100%,#ddd));
	background: -webkit-linear-gradient(left, #aaa 0%,#ddd 100%);
	background: -moz-linear-gradient(left, #aaa 0%, #ddd 100%);
	background: -ms-linear-gradient(left, #aaa 0%, #ddd 100%);
	background: -o-linear-gradient(left, #aaa 0%, #ddd 100%);
	background: linear-gradient(to right, #aaa 0%, #ddd 100%);
	filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=1)",#aaa,#ddd));
}

p {
	background: #eee;
	background: -webkit-gradient(linear, left top, right top, color-stop(0%,#eee), color-stop(100%,#fff));
	background: -webkit-linear-gradient(left, #eee 0%,#fff 100%);
	background: -moz-linear-gradient(left, #eee 0%, #fff 100%);
	background: -ms-linear-gradient(left,  #eee 0%, #fff 100%);
	background: -o-linear-gradient(left, #eee 0%, #fff 100%);
	background: linear-gradient(to right, #eee 0%, #fff 100%);
	filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=1)",#eee,#fff));
}
```

## &sect;&nbsp;Shadow
### <a name="box-shadow"></a>- box-shadow
**Description:**
```css
.box-shadow(@shadow);
```

**Parameters:**

	@shadow
		Properties of the shadow such as:
			offset-x
			offset-y
			spread-distance
			blur-radius
			color
			inset
	
**Example:**
```css
div {
	.box-shadow(10px 5px 5px rgba(10,10,10,0.5));
}
```

**CSS output:**
```css
div {
	-webkit-box-shadow: 10px 5px 5px rgba(10,10,10,0.5);
	   -moz-box-shadow: 10px 5px 5px rgba(10,10,10,0.5);
	        box-shadow: 10px 5px 5px rgba(10,10,10,0.5);
}
```

### <a name="inner-shadow"></a>- inner-shadow
**Description:**
```css
.inner-shadow(@horizontal: 0, @vertical: 1px, @blur: 2px, @alpha: 0.4);
```

**Parameters:**

	@horizontal (defaults to '0')
		Horizontal offset of the shadow.
	@vertical (defaults to '1px')
		Vertical offset of the shadow.
	@blur (defaults to '2px')
		Blur radius.
	@alpha (defaults to '0.4')
		Alpha channel for the RGB color.
	
**Example:**
```css
div {
	.inner-shadow(4px, 5px, 3px, @alpha: 0.5);
}

p {
	.inner-shadow();
}
```

**CSS output:**
```css
div {
	-webkit-box-shadow: inset 4px 5px 3px rgba(0, 0, 0, 0.5);
	   -moz-box-shadow: inset 4px 5px 3px rgba(0, 0, 0, 0.5);
	        box-shadow: inset 4px 5px 3px rgba(0, 0, 0, 0.5);
}

p {
	-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
	   -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
	        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
}
```

### <a name="outer-shadow"></a>- outer-shadow
**Description:**
```css
.outer-shadow(@horizontal: 0, @vertical: 1px, @blur: 2px, @alpha: 0.1)
```

**Parameters:**

	@horizontal (defaults to '0')
		Horizontal offset of the shadow.
	@vertical (defaults to '1px')
		Vertical offset of the shadow.
	@blur (defaults to '2px')
		Blur radius.
	@alpha (defaults to '0.1')
		Alpha channel for the RGB color.
	
**Example:**
```css
div {
	.outer-shadow(4px, 5px, 3px, @alpha: 0.5);
}

p {
	.outer-shadow();
}
```

**CSS output:**
```css
div {
	-webkit-box-shadow: 4px 5px 3px rgba(0, 0, 0, 0.5);
	   -moz-box-shadow: 4px 5px 3px rgba(0, 0, 0, 0.5);
	        box-shadow: 4px 5px 3px rgba(0, 0, 0, 0.5);
}

p {
	-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	   -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
```

## &sect;&nbsp;Size and position
### <a name="size"></a>- size
**Description:**
```css
.size(@width, @height);
```

**Parameters:**

	@width
		Width of the element.
	@height
		Height of the element.
	
**Example:**
```css
div {
	.size(200px, 150px);
}
```

**CSS output:**
```css
div {
	width: 200px;
	height: 150px;
}
```

### <a name="square"></a>- square
**Description:**
```css
.square(@size);
```

**Parameters:**

	@size
		Element dimensions.
	
**Example:**
```css
div {
	.square(300px);
}
```

**CSS output:**
```css
div {
	width: 300px;
	height: 300px;
}
```

### <a name="center-block"></a>- center-block
**Description:**
```css
.center-block();
```

**Parameters:**

	none
	
**Example:**
```css
div {
	.center-block();
}
```

**CSS output:**
```css
div {
	display: block;
	margin-left: auto;
	margin-right: auto;
}
```

## &sect;&nbsp;Transform
### <a name="rotate"></a>- rotate
**Description:**
```css
.rotate(@deg);
```

**Parameters:**

	@deg
		Angle of the rotation.
	
**Example:**
```css
div {
	.rotate(360deg);
}
```

**CSS output:**
```css
div {
	-webkit-transform: rotate(360deg);
	   -moz-transform: rotate(360deg);
	    -ms-transform: rotate(360deg);
	     -o-transform: rotate(360deg);
	        transform: rotate(360deg);
}
```

### <a name="scale with one parameter"></a>- scale with one parameter
**Description:**
```css
.scale(@ratio);
```

**Parameters:**

	@ratio
		The ratio of the scale transformation.
	
**Example:**
```css
div {
	.scale(3);
}
```

**CSS output:**
```css
div {
	-webkit-transform: scale(3);
	   -moz-transform: scale(3);
	    -ms-transform: scale(3);
	     -o-transform: scale(3);
	        transform: scale(3);
}
```

### <a name="scale with two parameters"></a>- scale with two parameters
**Description:**
```css
.scale(@ratioX, @ratioY);
```

**Parameters:**

	@ratioX
		The ratio of the X-axis scale transformation.
	@ratioY
		The ratio of the Y-axis scale transformation.
	
**Example:**
```css
div {
	.scale(2, 0.5);
}
```

**CSS output:**
```css
div {
	-webkit-transform: scale(2, 0.5);
	   -moz-transform: scale(2, 0.5);
	    -ms-transform: scale(2, 0.5);
	     -o-transform: scale(2, 0.5);
	        transform: scale(2, 0.5);
}
```

### <a name="scaleX"></a>- scaleX
**Description:**
```css
.scaleX(@ratio);
```

**Parameters:**

	@ratio
		The ratio of the X-axis scale transformation.
	
**Example:**
```css
div {
	.scaleX(1.5);
}
```

**CSS output:**
```css
div {
	-webkit-transform: scaleX(1.5);
	   -moz-transform: scaleX(1.5);
	    -ms-transform: scaleX(1.5);
	     -o-transform: scaleX(1.5);
	        transform: scaleX(1.5);
}
```

### <a name="scaleY"></a>- scaleY
**Description:**
```css
.scaleY(@ratio);
```

**Parameters:**

	@ratio
		The ratio of the Y-axis scale transformation.
	
**Example:**
```css
div {
	.scaleY(2.5);
}
```

**CSS output:**
```css
div {
	-webkit-transform: scaleY(2.5);
	   -moz-transform: scaleY(2.5);
	    -ms-transform: scaleY(2.5);
	     -o-transform: scaleY(2.5);
	        transform: scaleY(2.5);
}
```

### <a name="skewX"></a>- skewX
**Description:**
```css
.skewX(@deg);
```

**Parameters:**

	@deg
		Angle of the X-axis skew.
	
**Example:**
```css
div {
	.skewX(4deg);
}
```

**CSS output:**
```css
div {
	-webkit-transform: skewX(4deg);
	   -moz-transform: skewX(4deg);
	    -ms-transform: skewX(4deg);
	     -o-transform: skewX(4deg);
	        transform: skewX(4deg);
}
```

### <a name="skewY"></a>- skewY
**Description:**
```css
.skewY(@deg);
```

**Parameters:**

	@deg
		Angle of the Y-axis skew.
	
**Example:**
```css
div {
	.skewY(4deg);
}
```

**CSS output:**
```css
div {
	-webkit-transform: skewY(4deg);
	   -moz-transform: skewY(4deg);
	    -ms-transform: skewY(4deg);
	     -o-transform: skewY(4deg);
	        transform: skewY(4deg);
}
```

### <a name="translate with one parameter"></a>- translate with one parameter
**Description:**
```css
.translate(@ratio);
```

**Parameters:**

	@ratio
		Value of the X-axis translation.
	
**Example:**
```css
div {
	.translate(12px);
}
```

**CSS output:**
```css
div {
	-webkit-transform: translate(12px);
	   -moz-transform: translate(12px);
	    -ms-transform: translate(12px);
	     -o-transform: translate(12px);
	        transform: translate(12px);
}
```

### <a name="translate with two parameters"></a>- translate with two parameters
**Description:**
```css
.translate(@ratioX, @ratioY);
```

**Parameters:**

	@ratioX
		Value of the X-axis translation.
	@ratioY
		Value of the Y-axis translation.
	
**Example:**
```css
div {
	.translate(12px, 40%);
}
```

**CSS output:**
```css
div {
	-webkit-transform: translate(12px, 40%);
	   -moz-transform: translate(12px, 40%);
	    -ms-transform: translate(12px, 40%);
	     -o-transform: translate(12px, 40%);
	        transform: translate(12px, 40%);
}
```

### <a name="translateX"></a>- translateX
**Description:**
```css
.translateX(@ratio);
```

**Parameters:**

	@ratio
		Value of the X-axis translation.
	
**Example:**
```css
div {
	.translateX(12px);
}
```

**CSS output:**
```css
div {
	-webkit-transform: translateX(12px);
	   -moz-transform: translateX(12px);
	    -ms-transform: translateX(12px);
	     -o-transform: translateX(12px);
	        transform: translateX(12px);
}
```

### <a name="translateY"></a>- translateY
**Description:**
```css
.translateY(@ratio);
```

**Parameters:**

	@ratio
		Value of the Y-axis translation.
	
**Example:**
```css
div {
	.translateY(20%);
}
```

**CSS output:**
```css
div {
	-webkit-transform: translateY(20%);
	   -moz-transform: translateY(20%);
	    -ms-transform: translateY(20%);
	     -o-transform: translateY(20%);
	        transform: translateY(20%);
}
```

## &sect;&nbsp;Transition
### <a name="transition"></a>- transition
**Description:**
```css
.transition(@transition);
```

**Parameters:**

	@transition
		A shorthand property for setting the four transition properties into a single property.
	
**Example:**
```css
div {
	.transition(width 2s);
}
```

**CSS output:**
```css
div {
	-webkit-transition: width 2s;
	   -moz-transition: width 2s;
	     -o-transition: width 2s;
	        transition: width 2s;
}
```

### <a name="transition-all"></a>- transition-all
**Description:**
```css
.transition-all(@duration: 0.2s, @timing-function: ease-out);
```

**Parameters:**

	@duration (defaults to '0.2s')
		Specifies how many seconds or milliseconds a transition effect takes to complete.
	@timing-function (defaults to 'ease-out')
		Specifies the speed curve of the transition effect.
	
**Example:**
```css
div {
	.transition-all(1s linear);
}

p {
	.transition-all();
}
```

**CSS output:**
```css
div {
	-webkit-transition: all 1s linear;
	   -moz-transition: all 1s linear;
	     -o-transition: all 1s linear;
	        transition: all 1s linear;
}

p {
	-webkit-transition: all 0.2s ease-out;
	   -moz-transition: all 0.2s ease-out;
	     -o-transition: all 0.2s ease-out;
	        transition: all 0.2s ease-out;
}
```

### <a name="transition-property"></a>- transition-property
**Description:**
```css
.transition-property(@property);
```

**Parameters:**

	@property
		Specifies the name of the CSS property the transition effect is for.
	
**Example:**
```css
div {
	.transition-property(height);
}
```

**CSS output:**
```css
div {
	-webkit-transition-property: height;
	   -moz-transition-property: height;
	     -o-transition-property: height;
	        transition-property: height;
}
```

### <a name="transition-duration"></a>- transition-duration
**Description:**
```css
.transition-duration(@duration: 0.2s);
```

**Parameters:**

	@duration (defaults to '0.2s')
		Specifies how many seconds or milliseconds a transition effect takes to complete.
	
**Example:**
```css
div {
	.transition-duration(2s);
}

p {
	.transition-duration();
}
```

**CSS output:**
```css
div {
	-webkit-transition-duration: 2s;
	   -moz-transition-duration: 2s;
	     -o-transition-duration: 2s;
	        transition-duration: 2s;
}

p {
	-webkit-transition-duration: 0.2s;
	   -moz-transition-duration: 0.2s;
	     -o-transition-duration: 0.2s;
	        transition-duration: 0.2s;
}
```

### <a name="transition-timing-function"></a>- transition-timing-function
**Description:**
```css
.transition-timing-function(@timing-function);
```

**Parameters:**

	@timing-function
		Specifies the speed curve of the transition effect.
	
**Example:**
```css
div {
	.transition-timing-function(linear);
}
```

**CSS output:**
```css
div {
	-webkit-transition-timing-function: linear;
	   -moz-transition-timing-function: linear;
	     -o-transition-timing-function: linear;
	        transition-timing-function: linear;
}
```

### <a name="transition-delay"></a>- transition-delay
**Description:**
```css
.transition-delay(@delay);
```

**Parameters:**

	@delay
		Specifies when the transition effect will start.
	
**Example:**
```css
div {
	.transition-delay(1s);
}
```

**CSS output:**
```css
div {
	-webkit-transition-delay: 1s;
	   -moz-transition-delay: 1s;
	     -o-transition-delay: 1s;
	        transition-delay: 1s;
}
```

## &sect;&nbsp;Common
### <a name="box-sizing"></a>- box-sizing
**Description:**
```css
.box-sizing (@type: border-box);
```

**Parameters:**

	@type (defaults to 'border-box')
		Tell the browser what the sizing properties (width and height) should include.
	
**Example:**
```css
div {
	.box-sizing (@type: content-box);
}

p {
	.box-sizing();
}
```

**CSS output:**
```css
div {
	-webkit-box-sizing: content-box;
	   -moz-box-sizing: content-box;
	        box-sizing: content-box;
}

p {
	-webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	        box-sizing: border-box;
}
```

### <a name="clear-fix"></a>- clear-fix
**Description:**
```css
.clear-fix();
```

**Parameters:**

	none
	
**Example:**
```css
div {
	.clear-fix();
}
```

**CSS output:**
```css
div {
	*zoom: 1;
}

div:before, div:after {
	content: " ";
	display: table;
}

div:after {
	clear: both;
}
```

### <a name="hide"></a>- hide
**Description:**
```css
.hide();
```

**Parameters:**

	none
	
**Example:**
```css
div {
	.hide();
}
```

**CSS output:**
```css
div {
	display: none !important;
}
```

### <a name="show"></a>- show
**Description:**
```css
.show();
```

**Parameters:**

	none
	
**Example:**
```css
div {
	.show();
}
```

**CSS output:**
```css
div {
	display: block !important;
}
```

### <a name="inline-block"></a>- inline-block
**Description:**
```css
.inline-block();
```

**Parameters:**

	none
	
**Example:**
```css
div {
	.inline-block();
}
```

**CSS output:**
```css
div {
	display: inline-block;
	*zoom: 1;
	*display: inline;
}
```

### <a name="opacity"></a>- opacity
**Description:**
```css
.opacity(@opacity: 0.5);
```

**Parameters:**

	@opacity (defaults to '0.5')
		Opacity of the element.
	
**Example:**
```css
div {
	.opacity(0.9);
}

p {
	.opacity();
}
```

**CSS output:**
```css
div {
	-webkit-opacity: 0.9;
	   -moz-opacity: 0.9;
		    opacity: 0.9;
	@opperc: 0.9 * 100;
	-ms-filter: ~"progid:DXImageTransform.Microsoft.Alpha(opacity=@{opperc})";
	    filter: ~"alpha(opacity=@{opperc})";
}

p {
	-webkit-opacity: 0.5;
	   -moz-opacity: 0.5;
		    opacity: 0.5;
	@opperc: 0.5 * 100;
	-ms-filter: ~"progid:DXImageTransform.Microsoft.Alpha(opacity=@{opperc})";
	    filter: ~"alpha(opacity=@{opperc})";
}
```

### <a name="user-select"></a>- user-select
**Description:**
```css
.user-select(@select: none);
```

**Parameters:**

	@select (defaults to 'none')
		Selectable or unselectable text.
	
**Example:**
```css
div {
	.user-select(text);
}

p {
	.user-select();
}
```

**CSS output:**
```css
div {
	-webkit-user-select: text;
	   -moz-user-select: text;
	    -ms-user-select: text;
	     -o-user-select: text;
	        user-select: text;
}

p {
	-webkit-user-select: none;
	   -moz-user-select: none;
	    -ms-user-select: none;
	     -o-user-select: none;
	        user-select: none;
}
```

### <a name="placeholder"></a>- placeholder
**Description:**
```css
.placeholder(@color);
```

**Parameters:**

	@color
		Color of the placeholder text in the input field.
	
**Example:**
```css
div {
	.placeholder(#777);
}
```

**CSS output:**
```css
div::-webkit-input-placeholder {
	color: #777;
}

div::-moz-placeholder {
	color: #777;
	opacity: 1;
}

div:-ms-input-placeholder {
	color: #777;
}
```

## License
Copyright © 2014 Alexey Neretin. Licensed under the MIT license.
