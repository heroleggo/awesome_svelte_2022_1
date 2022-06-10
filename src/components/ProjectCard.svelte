<script>
    export let name;
    export let description;
    export let image;
    export let direction;

    const imageAlt =
        'https://steamuserimages-a.akamaihd.net/ugc/1644340994747007967/853B20CD7694F5CF40E83AAC670572A3FE1E3D35/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true';
</script>

<article>
    <figure>
        {#if direction === 'left'}
            <img src={image || imageAlt} alt="project-image" />
            <figcaption>
                프로젝트명 : {name}
                <br />
                {description}
            </figcaption>
        {:else}
            <figcaption>
                프로젝트명 : {name}
                <br />
                {description}
            </figcaption>
            <img src={image || imageAlt} alt="project-image" />
        {/if}
    </figure>
</article>

<style lang="scss">
    img {
        width: 600px;
        height: 337.5px;
        border: 1.5px solid black;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    figure {
        width: 100%;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
    }
    article {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: 24px;
        }
    }
    figcaption {
        width: 600px;
    }
</style>
