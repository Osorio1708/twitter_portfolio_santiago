export class RenderPortfolio {
  constructor(private portfolio: any) {}
  async sendScreen() {
    const dataToRender = await this.portfolio.then((element) => {
      return element.data.Item;
    });
    return `
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
    />
    <section class="container-fluid">
    <div class="row">
      <div class="col-8">
        <h1>${dataToRender.names ? dataToRender.names : ''}</h1>
        <h2>${dataToRender.description ? dataToRender.description : ''}</h2>
        <h3>${dataToRender.email ? dataToRender.email : ''}</h3>
        <h3>${dataToRender.phone ? dataToRender.phone : ''}</h3>
        <h3>${dataToRender.zip_code ? dataToRender.zip_code : ''}</h3>
      </div>
      <div class="col-4">
        <img id="image_url" src="${
          dataToRender.image_url ? dataToRender.image_url : ''
        }" alt="" />
        </br>
        <a href="${
          dataToRender.profile ? dataToRender.profile : ''
        }">Linkedin</a>
      </div>
    </div>
    <div  id="header" class="row">
      <div class="col-4">
        <h2>User Timeline</h2>
        <div class="row">
          <div class="col-4">
          <img id="image_twitter"  src="${
            dataToRender.twits[0].url_image
              ? dataToRender.twits[0].url_image
              : ''
          }" alt="" />
        </div>
          <div class="col-8">
          <h3>${
            dataToRender.twits[0].user ? dataToRender.twits[0].user : ''
          }</h3>
          <h4>${
            dataToRender.twits[0].user_id ? dataToRender.twits[0].user_id : ''
          }</h4>
          <p>${dataToRender.twits[0].body ? dataToRender.twits[0].body : ''}</p>
        </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img id="image_twitter" src="${
              dataToRender.twits[1].url_image
                ? dataToRender.twits[1].url_image
                : ''
            }" alt="" />
          </div>
          <div class="col-8">
            <h3>${
              dataToRender.twits[1].user ? dataToRender.twits[1].user : ''
            }</h3>
            <h4>${
              dataToRender.twits[1].user_id ? dataToRender.twits[1].user_id : ''
            }</h4>
            <p>${
              dataToRender.twits[1].body ? dataToRender.twits[1].body : ''
            }</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
          <img id="image_twitter" src="${
            dataToRender.twits[2].url_image
              ? dataToRender.twits[2].url_image
              : ''
          }" alt="" />
        </div>
          <div class="col-8">
          <h3>${
            dataToRender.twits[2].user ? dataToRender.twits[2].user : ''
          }</h3>
          <h4>${
            dataToRender.twits[2].user_id ? dataToRender.twits[2].user_id : ''
          }</h4>
          <p>${dataToRender.twits[2].body ? dataToRender.twits[2].body : ''}</p>
        </div>
        </div>
        <div class="row">
          <div class="col-4">
          <img id="image_twitter" src="${
            dataToRender.twits[3].url_image
              ? dataToRender.twits[3].url_image
              : ''
          }" alt="" />
          </div>
          <div class="col-8">
          <h3>${
            dataToRender.twits[3].user ? dataToRender.twits[3].user : ''
          }</h3>
          <h4>${
            dataToRender.twits[3].user_id ? dataToRender.twits[3].user_id : ''
          }</h4>
          <p>${dataToRender.twits[3].body ? dataToRender.twits[3].body : ''}</p>
          </div>
        </div>
      </div>
      <div class="col">
          <div class="col">
          <h2>${dataToRender.tittle ? dataToRender.tittle : ''}</h2>
          <div class="col">
          <p class="col-12">${
            dataToRender.experience_01 ? dataToRender.experience_01 : ''
          }</p>
          <p class="col-12">${
            dataToRender.experience_02 ? dataToRender.experience_02 : ''
          }</p>
          <p class="col-12">${
            dataToRender.experience_03 ? dataToRender.experience_03 : ''
          }</p>
          </div>
        </div>
    </div>
    <style>
      p {
        font-weight: 20px;
        font-size: large;
        padding: 30px;
      }
      div{
        width: 100%;
      }
      #image_twitter {
        min-width: 100%;
      }
      #image_url{
        max-width: 200px;
      }
      #header{
        margin-top: 50px;
      }
    </style>
      `;
  }
}
