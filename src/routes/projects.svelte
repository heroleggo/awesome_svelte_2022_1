<script>
    import ProjectCard from '$components/ProjectCard.svelte';

    const projects = [
        {
            name: '지구정복 프로젝트',
            description: '지구정복 프로젝트입니다.',
            image: '/images/earth_boom.jpg',
            direction: 'left',
        },
        {
            name: '우주정복 프로젝트',
            description: '우주정복 프로젝트입니다.',
            image: '/images/space_boom.jpg',
            direction: 'right',
        },
    ];
</script>

<section>
    <h3>진행했던 프로젝트</h3>
    {#each projects as project}
        <ProjectCard
            name={project.name}
            description={project.description}
            image={project.image}
            direction={project.direction}
        />
    {/each}
</section>

<style lang="scss">
    section {
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
</style>
