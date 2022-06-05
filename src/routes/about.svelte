<style lang="scss">
  .about {
    width: 80%;
    margin: auto;
  }
    .icon-holder {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 24px;
        font-weight: 600;
      }
      div {
        border: 1px solid $gray-200;
        border-radius: 5px;
        padding: 20px;
      }
      div > a {
        border: 0.5px solid $gray-100;
        border-radius: 5px;
        cursor: pointer;
        width: 400px;
        height: 80px;
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 700;

        img {
          margin-right: 10px;
        }
      }
      div > a:not(:last-of-type) {
        margin-bottom: 12px;
    }
      div > a:hover {
        background: $gray-100;
      }
    }
</style>


<div class="about">
    <p>저는 대충 어쩌구저쩌구인 사람입니다.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid amet doloribus eligendi facilis soluta tenetur. Consectetur dignissimos dolores eaque earum eos excepturi hic iure magnam, nemo nihil porro, repellendus?</p>
    <div class="icon-holder">
        <h3>Links</h3>
        <div>
            <a href="https://github.com/heroleggo" target="_blank">
                <img src="/icons/github.svg" alt="github-icon" width="60" height="60" />

                Go to Github
            </a>
            <a href="https://heroleggo.world" target="_blank">
                Go to Tistory Blog (almost empty :D)
            </a>
        </div>
    </div>
</div>