import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import styled, { css } from "styled-components";

function ImageGallery(
  { styles, activeStyle, isExpanded, toggleExpandedView, placeHolderImage },
  ref
) {
  const [activeImage, setActiveImage] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [bigImagePos, setBigImagePos] = useState("center");
  const imageGalleryRef = useRef();

  // pass up to overview function that resets the big image to the first after changing styles
  useImperativeHandle(ref, () => ({
    selectBigPicture: () => {
      setActiveImage(0);
    },
  }));

  function selectBigPicture(e) {
    setActiveImage(Number(e.target.getAttribute("name")));
  }

  function changeBigPicture(e) {
    switch (e.target.id) {
      case "decrement": {
        if (activeImage === 0) {
          break;
        }
        setActiveImage(activeImage - 1);
        const imageHeight = document.getElementsByName(activeImage)[0].height;
        if ((imageHeight + 7) * activeImage - (imageHeight + 7) <= 0) {
          setAtTop(true);
        }
        imageGalleryRef.current.scrollTo(
          0,
          (imageHeight + 7) * activeImage - (imageHeight + 7)
        );
        break;
      }
      case "increment": {
        if (activeImage === styles[activeStyle].photos.length - 1) {
          break;
        }
        setActiveImage(activeImage + 1);
        const imageHeight = document.getElementsByName(activeImage)[0].height;
        if (imageGalleryRef.current.scrollTop > 0) {
          setAtTop(false);
        }
        imageGalleryRef.current.scrollTo(
          0,
          (imageHeight + 7) * (activeImage + 1) - (imageHeight + 7)
        );
        break;
      }
      default:
        console.log("Error with arrows: ", e.target.id);
    }
  }

  const imageGalleryImgStyle = css`
    object-fit: cover;
    height: 85%;
    aspect-ratio: 1/1;
    margin: 5px;
    cursor: pointer;
  `;

  const ImageGalleryImage = styled.img`
    ${imageGalleryImgStyle};
    border: thin solid black;
  `;

  const ActiveImageStyle = styled.img`
    ${imageGalleryImgStyle};
    border: thick solid black;
  `;

  const ImageGalleryImgContainer = styled.div`
    position: relative;
    height: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const BigImage = styled.div`
    position: ${isZoomed ? "fixed" : null};
    height: 100%;
    width: 100%;
    cursor: ${isExpanded ? (isZoomed ? "zoom-out" : "crosshair") : "zoom-in"};
    background-image: url(${styles &&
    (styles[activeStyle].photos[activeImage].url === null
      ? placeHolderImage
      : styles[activeStyle].photos[activeImage].url)});
    background-position: ${isZoomed ? bigImagePos : "center"};
    background-size: ${isZoomed ? "250%" : "contain"};
    background-repeat: no-repeat;
  `;

  const imageGalleryDivStyle = {
    display: "flex",
    "flex-direction": "column",
    overflow: "clip hidden",
    "justify-items": "center",
    "scroll-behavior": "smooth",
    "max-height": "80%",
    gap: "0.4%",
    "align-items": "center",
  };

  const overviewButtonStyle = css`
    border: none;
    font-size: x-large;
    opacity: 50%;
    background-color: whitesmoke;
    cursor: pointer;
    :hover {
      background-color: lightgray;
    }
  `;

  const ExpandButton = styled.button`
    ${overviewButtonStyle};
    top: 0;
    right: 0;
    position: absolute;
    visibility: ${isExpanded ? (isZoomed ? "hidden" : "visible") : "hidden"};
  `;

  const RightArrowButton = styled.button`
    ${overviewButtonStyle}
    display: ${isZoomed ? "none" : "visible"};
    right: 0;
    position: absolute;
    visibility: ${styles &&
    activeImage === styles[activeStyle].photos.length - 1
      ? "hidden"
      : "visible"};
  `;

  const LeftArrowButton = styled.button`
    ${overviewButtonStyle}
    display: ${isZoomed ? "none" : "visible"};
    left: 0;
    position: absolute;
    visibility: ${activeImage === 0 ? "hidden" : "visible"};
  `;

  const UpArrowButton = styled.button`
    ${overviewButtonStyle};
    cursor: url(https://cdn.custom-cursor.com/db/6777/32/among-us-impostor-of-the-vent-pointer.png),
      pointer;
    display: ${styles && styles[activeStyle].photos.length <= 7
      ? "none"
      : "flex"};
    visibility: ${atTop ? "hidden" : "visible"};
  `;

  const DownArrowButton = styled.button`
    ${overviewButtonStyle};
    display: ${styles && styles[activeStyle].photos.length <= 7
      ? "none"
      : "flex"};
  `;

  const BigPictureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: ${isExpanded ? "100%" : "70%"};
    height: 100%;
    position: relative;
    flex-basis: 100%;
  `;

  function scrollDown(offset) {
    imageGalleryRef.current.scrollTop += offset;
    if (offset > 0) {
      setAtTop(false);
    }
    if (offset < 0) {
      if (imageGalleryRef.current.scrollTop + offset <= 0) {
        setAtTop(true);
      }
    }
  }

  function toggleZoomView() {
    setIsZoomed(!isZoomed);
    document.body.style.overflow = !isZoomed ? "hidden" : "auto";
  }

  function galleryGenerator() {
    let index = -1;
    return styles[activeStyle].photos.map((photo) => {
      index++;
      if (isExpanded) {
        if (index === activeImage) {
          return (
            <p
              style={{
                border: "medium solid black",
                cursor: "pointer",
                margin: "1px",
                height: "calc(1vw + 1vh)",
                width: "calc(1vw + 1vh)",
                "text-align": "center",
                "font-size": "calc(0.6vw + 0.6vh)",
              }}
              onClick={selectBigPicture}
              name={index}
            >
              🖼️
            </p>
          );
        }
        return (
          <p
            style={{
              border: "thin solid black",
              cursor: "pointer",
              margin: "1px",
              height: "calc(1vw + 1vh)",
              width: "calc(1vw + 1vh)",
              "text-align": "center",
              "font-size": "calc(0.6vw + 0.6vh)",
            }}
            onClick={selectBigPicture}
            name={index}
          >
            🖼️
          </p>
        );
      } else {
        if (index === activeImage) {
          return (
            <ImageGalleryImgContainer>
              <ActiveImageStyle
                onClick={selectBigPicture}
                name={index}
                src={photo.url === null ? placeHolderImage : photo.url}
                alt="style-img"
              />
            </ImageGalleryImgContainer>
          );
        }
        return (
          <ImageGalleryImgContainer>
            <ImageGalleryImage
              onClick={selectBigPicture}
              name={index}
              src={photo.url === null ? placeHolderImage : photo.url}
              alt="style-img"
            />
          </ImageGalleryImgContainer>
        );
      }
    });
  }

  function handleMouseZoom(e) {
    setBigImagePos(
      `${(e.nativeEvent.offsetX / window.innerWidth) * 100}% ${
        (e.nativeEvent.offsetY / window.innerHeight) * 100
      }%`
    );
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        "flex-basis": "100%",
        "background-color": "whitesmoke",
      }}
    >
      <div
        style={{
          "max-height": "100%",
          display: isZoomed ? "none" : "flex",
          "flex-direction": "column",
          "align-items": "center",
          "max-width": "85px",
        }}
      >
        <UpArrowButton onClick={() => scrollDown(-50)}>⇧</UpArrowButton>
        <div style={imageGalleryDivStyle} ref={imageGalleryRef}>
          {styles && galleryGenerator()}
        </div>
        <DownArrowButton onClick={() => scrollDown(50)}>⇩</DownArrowButton>
      </div>
      <BigPictureContainer>
        <LeftArrowButton
          type="button"
          id="decrement"
          onClick={changeBigPicture}
        >
          ⇦
        </LeftArrowButton>
        <BigImage
          onClick={isExpanded ? toggleZoomView : toggleExpandedView}
          onMouseMove={isZoomed ? handleMouseZoom : null}
        />
        <ExpandButton onClick={toggleExpandedView}>✕</ExpandButton>
        <RightArrowButton
          type="button"
          id="increment"
          onClick={changeBigPicture}
        >
          ⇨
        </RightArrowButton>
      </BigPictureContainer>
    </div>
  );
}

export default forwardRef(ImageGallery);
