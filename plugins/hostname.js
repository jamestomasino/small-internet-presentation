export default ({ app }, inject) => {
  inject('hostname', getHostname)
  function getHostname (e) {
    return window.location.hostname
  }
}
