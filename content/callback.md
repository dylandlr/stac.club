<script>
window.onload = () => {
    auth0.handleRedirectCallback().then((redirectResult) => {
        window.location.href = "/";
    }).catch(e => console.error(e));
};
</script>