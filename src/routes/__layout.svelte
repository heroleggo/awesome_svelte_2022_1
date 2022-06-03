<script>
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

<slot></slot>

<footer class="footer">
    <div>
        <h2>Contact</h2>
        <h4>h3r0.y0u@gmail.com</h4>
    </div>
</footer>

