export const shareOnFacebook = (vehicleId: number) => {
    const url = `${window.location.origin}/vehicle/${vehicleId}`;
    const facebookSharerUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookSharerUrl, '_blank', 'width=600,height=400');
};
