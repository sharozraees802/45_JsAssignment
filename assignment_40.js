function makealbum(name, title, NumOfTracks = 0) {
  const album = {
    artistname: name,
    albumtitle: title,
    // NoOfTracks: NumOfTracks,
  };
  if (NumOfTracks) {
    album["NoOfTracks"] = NumOfTracks;
  }
  return album;
}

let album = makealbum("Atif Aslam", "Taj Dar e Haram");
console.log(album);

album = makealbum("Justin Bieber", "Justice");
console.log(album);

album = makealbum("Rahat Fateh Ali Khan", "Zaroori Tha");
console.log(album);

album = makealbum("Justin Bieber", "Under the Mistletoe", 7);
console.log(album);
