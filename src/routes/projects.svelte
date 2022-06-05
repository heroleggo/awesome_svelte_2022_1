<script>
</script>

<div class="projects">
    <h3>진행했던 프로젝트</h3>
    <div class="container">
        <div class="box">대충 지구 사진이라고 생각하십쇼</div>
        <p>
            프로젝트명: 지구정복 프로젝트
            <br />
            대충 어쩌구 저쩌구 저쩌구 저쩌구
        </p>
    </div>
    <div class="container">
        <p>
            프로젝트명: 우주정복 프로젝트
            <br />
            대충 어쩌구 저쩌구 저쩌구 저쩌구
        </p>
        <div class="box">대충 외계인 침공 사진</div>
    </div>
</div>

<style lang="scss">
    .projects {
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
    .box {
        width: 400px;
        height: 300px;
        border: 2px solid black;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        &:not(:last-of-type) {
            margin-bottom: 24px;
        }

        div + p {
            margin-left: 24px;
        }
        p + div {
            margin-left: 24px;
        }
    }
</style>
