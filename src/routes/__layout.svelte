<script>
    import { page } from '$app/stores';

	let currentPath;

    $: if ($page.url.pathname === '/') {
		currentPath = 'home';
    } else if ($page.url.pathname === '/about') {
		currentPath = 'about';
    } else if ($page.url.pathname === '/projects') {
		currentPath = 'projects';
    }
</script>
<style lang="scss">
    .header {
      width: 85%;
      margin: auto;
      padding: 12px 12px;
      display: flex;
      justify-content: space-between;
      .name {
        font-size: 20px;
        font-weight: 700;
      }
      .menu {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        a {
          margin: 0 12px;
        }
      }
    }
    .footer {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .container {
      padding: 10px 0;
      background: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
      width: 100%;
      height: 240px;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
</style>

<div class="header">
    <div class="name">
        Junior Web Developer, Youngwoong You
    </div>
    <div class="menu">
        <a href="/">home</a>
        <a href="/about">about</a>
        <a href="/projects">projects</a>
    </div>
</div>
<div class="container">
    {#if currentPath === 'home'}
        <div>
            <p>안녕하세요?</p>
            <p>주니어 웹 개발자 유영웅입니다.</p>
        </div>
    {:else if currentPath === 'about'}
        <div>
            About Me
        </div>
    {:else if currentPath === 'projects'}
        <div>
            Projects
        </div>
    {/if}
</div>

<slot></slot>

<footer class="footer">
    <div>
        <h2>Contact</h2>
        <h4>h3r0.y0u@gmail.com</h4>
    </div>
</footer>

