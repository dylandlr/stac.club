+++
title = ""
date = "2024-04-19"
aliases = ["callback","callback-stacc"]
[ author ]
  name = "STACC"
+++



<script>
window.onload = () => {
    auth0.handleRedirectCallback().then((redirectResult) => {
        window.location.href = "/";
    }).catch(e => console.error(e));
};
</script>