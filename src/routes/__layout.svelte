<script>
</script>
<style lang="scss">
    .header {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
    }
    .name {
      padding-left: 10px;
      font-size: 16px;
      font-weight: 700;
    }
</style>

<div class="header">
    <div class="name">
        Frontend, Backend Developer Youngwoong You
    </div>
    <nav>
        <div class="">
            <a href="/">home</a>
            <a href="/about">about</a>
            <a href="/projects">projects</a>
        </div>
    </nav>
</div>

<slot></slot>

<footer>
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/projects">projects</a>
</footer>

