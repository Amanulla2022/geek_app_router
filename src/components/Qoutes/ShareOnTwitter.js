const shareOnTwitter = (quote) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${quote.quote} - ${quote.author}`
  )}`;
  window.open(twitterUrl, "_blank");
};

export default shareOnTwitter;
