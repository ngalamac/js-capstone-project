import APILoader from "./api_loader.js";
import Navigation from "./nav.js";
const modal = document.getElementById('modal-comment');

const parent = document.getElementById("parent");

const loader = new APILoader();
const nav = new Navigation();

class DOMManipulator {
  displayItems = async () => {
    loader.url = "https://api.tvmaze.com/shows";
    const data = await loader.getData();
    data.forEach((show) => {
      this.createCard(show);
    });
  };

displayLikes = async (likes, noOfLikes, showName) => {
    const lk = await likes;
    lk.forEach((like) => {
      if (like.item_id === showName) {
        noOfLikes.innerHTML = `${like.likes} likes`;
      }
    });
  }
  
  createCard = async (show) => {
    const createData = {
      card: ["div", ["card"], null],
      cardWrapper: ["div", ["card-wrapper"], null],
      showImage: ["img", ["show-image"], "show-image"],
      nameLikeParent: ["div", ["name-like-parent"], null],
      span: ["span", ["name"], null],
      likeParent: ["div", ["like-parent"], null],
      like: ["a", null, "like"],
      i: ["i", ["fa", "fa-heart"], null],
      noOfLikes: ["span", ["no-of-likes"], null],
      comment: ["button", ["comment"], "comment"],
    };
    const elem = this.batchCreateElements(createData);

    elem.showImage.src = show.image.medium;
    elem.span.innerHTML = show.name;
    elem.noOfLikes.innerHTML = "0 likes";
    this.likeItem(elem.like, show.name);
    const likes = await this.loadLikes();
    likes.forEach((like) => {
      if (like.item_id === show.name) {
        elem.noOfLikes.innerHTML = `${like.likes} likes`;
      }
    });

    elem.comment.innerHTML = "Comments";
    nav.showModal(elem.comment);

    elem.like.href = "";
    const appendData = [
      { child: elem.cardWrapper, parent: elem.card },
      { child: elem.showImage, parent: elem.cardWrapper },
      { child: elem.nameLikeParent, parent: elem.cardWrapper },
      { child: elem.span, parent: elem.nameLikeParent },
      { child: elem.likeParent, parent: elem.nameLikeParent },
      { child: elem.like, parent: elem.likeParent },
      { child: elem.i, parent: elem.like },
      { child: elem.noOfLikes, parent: elem.likeParent },
      { child: elem.comment, parent: elem.cardWrapper },
    ];

    this.batchAppendElements(appendData);
  };

  createCommentModal = () => {

    const modalContent = `<div class="modal-wrapper">
        <div class="modal-header">
            <div class="img-parent">
                <img src="" alt="Show image" class="modal-image">
            </div>
            <span><a href="" id="close">&times</a></span>
        </div>
        <h2 class="name-show">Name of the show</h2>
        <div class="detail">
            <div>
                <p>Type:</p>
                <p>Status:</p>
                <p>Language:</p>
            </div>
            <div>
                <p>Genres:</p>
                <p>Premiere date:</p>
                <p>End date:</p>
            </div>
        </div>
        <div class="comment-div">
            <h3 class="commnet-header">Comments(2)</h3>
            <div class="commnets">
                <p>12/09/2023 Wac: An amzing web app! An amzing web app! An amzing web app! An amzing web app! An
                    amzing web app! An amzing web app! An amzing web app! An amzing web app! An amzing web app! An
                    amzing web app! An amzing web app! An amzing web app! An amzing web app! An amzing web app!</p>
                <p>12/09/2023 Wac: An amzing web app!</p>
                <p>12/09/2023 Wac: An amzing web app!</p>
            </div>
        </div>
    </div>`;
    modal.innerHTML = modalContent;
  };

  likeItem = (likebutton, id) => {
    likebutton.addEventListener("click", async (event) => {
      event.preventDefault();
      loader.url =
        "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rfuakKcpJ3xCvEF2UbWq/likes";
      const itemId = {
        item_id: id,
      };
      const likes = await loader.setData(itemId);
      if (likes === 201) {
        const lk = likebutton.parentNode.childNodes[1].innerHTML.split(" ")[0];
        likebutton.parentNode.childNodes[1].innerHTML = `${
          Number(lk) + 1
        } likes`;
      }
    });
  };

  loadLikes = async () => {
    loader.url =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rfuakKcpJ3xCvEF2UbWq/likes";
    const likes = await loader.getData();
    return likes;
  };

  addComment = (commentData) => {
    loader.url =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rfuakKcpJ3xCvEF2UbWq/comments";
    const comment = loader.setData(commentData);
    return comment;
  };

  /*getComment = (item_id) => {
    loader.url =
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rfuakKcpJ3xCvEF2UbWq/comments?item_id=${item_id}`;
      const comment = loader.getData(commentData);
      console.log(comment);
      return comment;
  }*/

  createElement = (type, clss, id) => {
    const element = document.createElement(type);
    if (clss) {
      clss.forEach((cls) => {
        element.classList.add(cls);
      });
    }

    if (id) {
      element.id = id;
    }
    return element;
  };

  appendElement = (child, parent) => {
    if (parent) {
      parent.appendChild(child);
    }
  };

  batchCreateElements = (createData) => {
    const elt = {};
    const keyValuePair = Object.entries(createData);
    keyValuePair.forEach(([key, val]) => {
      elt[key] = this.createElement(...val);
    });
    return elt;
  };

  batchAppendElements = (appendData) => {
    appendData.forEach((elt) => {
      this.appendElement(elt.child, elt.parent);
    });
    parent.appendChild(appendData[0].parent);
  };
}

export default DOMManipulator;
