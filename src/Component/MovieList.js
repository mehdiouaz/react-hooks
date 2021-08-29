import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import FormAdd from "./FormAdd";
import { v4 as uuidv4 } from "uuid";
import ReactStars from "react-rating-stars-component";

function MovieList() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      Title: "Jumper",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/3/37/Jumperposter.jpg",
      rating: "5",
      Description:
        "Aimless David Rice (Hayden Christensen) has the ability to instantly transport himself to any place he can imagine. He uses that gift to globe-trot, living on money he steals by jumping into bank vaults. He's captured by the evil Roland Cox (Samuel L. Jackson), who knows how to keep David from jumping.",
    },
    {
      id: uuidv4(),
      Title: "The Lord of the rings I",
      posterURL: "https://cima4u.ws:2053/wp-content/uploads/050-1367.jpg",
      rating: "4",
      Description:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    },
    {
      id: uuidv4(),
      Title: "The Lord of the rings II",
      posterURL: "https://i.pinimg.com/474x/cf/1d/d6/cf1dd62b0447298868a5ccd51f70a867.jpg",
      rating: "6",
      Description:
        "The two towers between Mordor and Isengard, Barad-dûr and Orthanc, have united in their lust for destruction. The corrupt wizard Saruman, under the power of the Dark Lord Sauron, and his slimy assistant, Gríma Wormtongue, have created a grand Uruk-hai army bent on the destruction of Man and Middle-earth.",
    },
    {
      id: uuidv4(),
      Title: "The lord of the rings III ",
      posterURL: "https://cima4u.ws:2053/wp-content/uploads/050-1369.jpg",
      rating: "7",
      Description:
        "The Return of the King, the third and final volume in The Lord of the Rings, opens as Gandalf and Pippin ride east to the city of Minas Tirith in Gondor, just after parting with King Théoden and the Riders of Rohan at the end of The Two Towers. In Minas Tirith, Gandalf and Pippin meet Denethor, the city’s Steward, or ruler, who clearly dislikes Gandalf. Pippin offers Denethor his sword in service to Gondor, out of gratitude for the fact that Denethor’s son Boromir gave his life for the hobbits earlier in the quest.",
    },
    {
      id: uuidv4(),
      Title: "Avengers",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      rating: "5",
      Description:
        "Marvel's The Avengers or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
    },
    {
      id: uuidv4(),
      Title: "Thor",
      posterURL: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
      rating: "4",
      Description:
        "Thor OdinsonThor ... The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike. .. ",
    },
    {
      id: uuidv4(),
      Title: "Undisputed",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/0/08/Undisputed_III_Redemption.jpg",
      rating: "6",
      Description:
        "Tells the story of an undefeated world-champion prize fighter (Ving Rhames) who is convicted of rape and sent to prison, where he must confront and ultimately fight the reigning prison boxing champion",
    },
    {
      id: uuidv4(),
      Title: "Never back down",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Never_back_down.jpg/220px-Never_back_down.jpg",
      rating: "9",
      Description:
        "The film is about a frustrated and conflicted teenager who arrives at a new high school to discover an underground fight club.",
    },
    {
      id: uuidv4(),
      Title: "Interstellar",
      posterURL: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: "5",
      Description:
        "Interstellar is a 2014 epic science fiction drama film co-written, directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
    },
    {
      id: uuidv4(),
      Title: "The fast and the furious",
      posterURL: "data:image/jpeg;base64,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",
      rating: "5",
      Description:
        "Fast & Furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, spies and betrayal.",
    },
    {
      id: uuidv4(),
      Title: "Fast five",
      posterURL: "https://c8.alamy.com/comp/EFB4HE/vin-diesel-paul-walker-dwayne-johnson-poster-fast-five-2011-EFB4HE.jpg",
      rating: "8",
      Description:
        "Fast Five follows Dominic Toretto (Vin Diesel), Brian O'Conner (Paul Walker) and Mia Toretto (Jordana Brewster) as they plan a heist to steal $100 million from corrupt businessman Hernan Reyes (Joaquim de Almeida) while being pursued for arrest by U.S. Diplomatic Security Service (DSS) agent Luke Hobbs (Dwayne Johnson) .",
    },
    {
      id: uuidv4(),
      Title: "Fast and furious 6",
      posterURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgUFBUYGBgaGxgaGBoaGhsbGhkaGBgZGRgYGBobIC0kGx0pHhkYJTglKS4wNDQ0GiM5PzkyPi0yNDABCwsLEA8QHhISHjIiJCkyMjIyNTIyMjIyMjIwMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAREAuAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xAA7EAACAQMDAgQFAgMHBAMBAAABAhEAAyEEEjEFQQYiUWETMnGBkaGxB1LwFCNCgsHR4WJyovEVM5JT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQGBf/EACURAAICAgMAAgICAwAAAAAAAAABAhEDIRIxQSJRBBOh8BRhgf/aAAwDAQACEQMRAD8AtYrkUuKNtfWPP0IiiKVFEUCoRFdilRRFACaKVFEUAcoiuxRFAUJiuxXYoigKORRFL21yKB0ciiK7FEUCo5FEUqK5FFhRyKIpUVyKAORRFKiiKAExRSgtFIAroFdoFBYbaNtOqtd20rKoZ20bae20baLFQztru2u3riIJdlUEwCxABPpJ70LdQkAOpJLAAMJJT5gPUjv6UWPic20pLRJgU22rtKWU3EBUSwLqCoHdhOBkc+tO6fX2ZX+8QhpKw6ncByVz5o9qTkNQ+yVo+mNcYDgdzzV5/wDBWUgkk+xOP0pGk67o1VWGosKrNsVjcQAsIlQZy2Rj3FTtdq7AD/EvW0FvaX3uq7A5ITfJ8oYggTzGK5J5ZN/R34/x4pdWxu1p7ZkKi55Ec0+nSbY5RT9sVE0+u0aHcNRYnZ8Qf3qf/X//AE+b5P8Aq4qS/W9KLS3jqbAtMdq3DdQIzCfKrbtpPlbAPY+lZuT8ZtHGvUI1vR7TIQqBT2IFZvV9P2Dma0b9X077xbv2nKCXCXEYoPVwD5R7mstqutae4ZS9aYSBK3EIkkKBg+pA+pFa4ZSvs5/yMcfERytcikWNfZdtqXbbMRu2qys0EAzAMxBBn3qTsrrtHA4tDO2u7adK1zbTsmhvbXQtOBKCtKx0cC1ypGnskmilyRXBkbZXVSpASlBKLDiNolOBKWqHsKdt2s5wKlstIBoG7FT96cTpp5Jx7f8ANTtHYEyvbvU2JaO1YyyNHTHFFqzH9X8MW77L8UuQgO0K20AkglojLYAz2mpeh8EWrbI4u3pQuVDMpEXSGcGE4LCa0406mAfr/wC6lFAeDxWcp7s2hjpV4YrqXgHTsXuIz7nbe0sDDblcFQykDKKOIIUAzAqsu+ArQIJ3yAQGDwQGDhoxAk3GaY5avQrxI4qLrADHrRF/Ypx+nRktB4JtrctuN/kYODuUSw2ABiFnbCINoIBC571ddR8Kaa81xrj3puNbd1W5ClrQAQgRiIFTdLfadpxUl2BGM0pRtjhKlplE/gjRMWYm6WZdrH4hyv8AdgLEQABaQYHAzNTH6LYW0ljaxVLovZaS9wXDd3Oe8uZI+3FPaYsr+k09qbDM2DFLgkx/sk1oqdJ0LT6be1vfudSks27arXHuFVxwXuMcyeM4rON4U03l8reRVVTuyFUOFj3ly31APatLqAwMHmmDW8IJI5Z5ZN/RUdP6HasuXQMCVCRPlCjaB5RAJhVEmTAqy207tru2tFS6Mm23bI5SubamJpieKe/+Mf0pc0g/XJ9IrttLtacsYAJq+0XSBgv+KtktKvAArOWZLo3x/jN7lopdBoSPmED965V6worB5HZ0rEkqMp/Z4yac0+mBJ71Z3U2iIH1rtgxiMc1u8jo51iV0QBpScIpH7Ul9IVEkifzVw10ARUDUyxkcClGTY5Y4pEjpgCrmJP8AQqW6kGQKgq4VqLuuJ4qHFt2aRnGMaZLCgHcTkjNRr+qC8VDa8x70lE3Nn71Sx12Q8l6Ra6NS4luO1NanSmZpxbgXANLUs4xx71ntOzak1RDZcTEH19qY3kMKnXNI7HmBUqzpUWIGfXvVc0kR+uTf0M6Vcz6/tXdWhiRz+9O3VA4xSkSeai92a8dcTP3tKeTXNPoWc4GPWtE1hTyKUiAYAir/AGujH/HV7IFnpSAyTPpUg6JOwqVRWbk2bLHFdIhJpQDMVLVYo20qldlKKQUUUUFhRRRRQiC9wAQwptLiTjAqG7k1wCt1A43kdj90elMSeKcRyKQ1UtEydiNhNcZaUTXKogTFLVCeJpSJ3NT9LZPPA/eplKi4Y3JidFpuS1WAFCiK7XPKVs7IQUVQUUUkt2pFiDbk5p2iuFqBVR2ikhxSqBhRRRQAUUUUAFFFcZgKBATRTTXxRRTFyRUqtSLVicnFNAUqTW7OSNenWscwQaYK07SSKExNIb20baVFLRJqrFxsXpFWfNVqCKhrbEcU214jFYy+TOiD4rZYA12q/wCMfWlDVx2mp4srmiY7xTCXBk1FuXixpBmmokvJvRLbVioxuFjzSNtLt4NVSRDk5dkrTqZqUTUH4xGabLse9S42aqaSJxvKO9R7mr9KjMp71wLTUUS5yZJtXDzTr6iKjB4pDMTRxDm0h9tSTxTDMTQopYp9E232N7a7TlFFhxI9KBpIFFUZoVXCK6Fru2lY6EhaftqI/wBKbpSGkyojriBP6VHanGJNJC0loctiQK4FrN+KeuX9NcT4apsZguQWdvUdgo981d9F1/x7fxANuf0IBB/B/ShTTKeNpWyeqRTN3XWt/wAM3ED/AMm9d/8A+Zmn9h+9eddZ1aDqenm2VJC7t4USruUVgCcwyfWHHvEynTRePHyTPQtooio3StQ9y0ty5b2O26UmYhiAQSBggA8d6m7aqzNxpjZFQeqapUQqSQdjvjEhAJz9xUvU6hLSl7jKiqCSzGAAMmsF4j8f6Vt1uw+5liGZWCPuYKwDR2XM/vUzfxLxx+SsvvB3U3vWzuTbtxJYEkgxlZlZEH71oSKxH8NLlsreJuobj3Hb4YYF1GJPPnWRggDFbsiiGlseWnJ0NxXQlV3V/EGl0pUai8lst8oMliJidqgmPfjBqh691NluB7dwFCEZCDKsjiQQQYOQSD71VkKJsQlLUVW3Os2gfnHAP5mf9PzUe54gtqCQCYE/b96KYUi9AorPXeukSxhVjlpEn29aKXFlWi1ropMUoCrMRQFKikA11XBJEiRyJyJ9R2pFI7FdBoiuhDQFBQDTjIaRspWiqZ5t/Eq+bV63d5WDAZiNrhkO5c4BVYx7+prV+C7ltrBu27m8XGDxu3BDsRSi+gBUmPUmqXx6j3XSyAnwQrFnYAvvlYCbhgBSTInODEVkfC3iYabUNp7YC2oLDECVjcW+oHI9KI4/TSWRuNHtKNNebfxM0uy6mptPaL2RuuI9xVZUeQkqBuaSGgAzPANajqXiCNJduWTFwWndJzDbCRjuRzHtXg2pdnZndi7EkszHcxY8sSck0nC+whKjW9H/AIs6hCBesJdQBRglHwAGacqZyYgfWvWOg9fs620LtrcsjKupVl9fZh7qSK+dulab4ups2Qu7e6hh6ruBb/xDV6gm6zrWSCqXQSIMAOiyIH0kH6ipcqaRShyTZM/iv1ALpvhqZI87CTH8qyP8WScHGK8l0PWLoItqRtMkq0bWMSZHGft2gg5r0jxN07dpADDN8SGJMypHyk/UT9xXlPVLCo4CCMevpiqlNXSFGD42zXrpQWtXrD/DJ2upB3Nb43QQZK5IntIr0Pp3iW7dtqVZJyrN3Lqdp8o4z+9eN9E1m1gGJ2jcRxmVIK/jP1Fbrwmso/PzgkYgE8kd+TP/ALqrvbIca0PeOgHsO10J8RfNv2qzhgECLIOFMMJiPIe5qL4f1fxtIvG5F2Z+XyEZAHAgMcVotX022VN11V3tq5QkYHkMgjuOJHesZ4R6rat2xZJi69yGVgqgFyVhYGFCzx3IHoKyupM6FBuKL/Vdc23LS/DLkgeVNohQFUsxeAJbj6iYmrK7cdjNvIxEgYJz5pBPNV3UNGvxUcOVJAt3AyCNm9XlSpmQRkT6RNSbtvczYiWJ3A7g2fL9pIM+9aK+/DGSXXo+2pE7htO0gDBIEjAI4maKlaTTArDW/NKtkmMcbR2+ae3vXaLFRsLlwKJOfYd/amhdfnaPpJn896zT+IWO07QYyIBIyPU8GJ7+tVp8YObq23BTeCbbEqQ4zt+XiYBiZg1fXZik30b5H3CR+vY1gfDVxreuKO/mYMtweWS6bz5zkmZmR/L6GoviTxLds2mNrLtMljISIBeO5EgAGfvWA6V1m5bUkXNzwPMTLAK25lb+ZWMc5xWc1clRvidRd+nvus8Qae0AXfltoCgkzz9h7nFN9V6kz2nSy/w3ZSBcgHZ6sq9zEx7xXmXU/ENi5Yt7fM7AmRJAkbW3yTBOYxiPzoumdeW4gW2u4oNu7EEJ5dw9jEjA5pVbYdKyH0Lql/TBrl68XAJW6TuNzapOx3UsRIkAvAMGG+UEaa/1hlG87guI3TEsQq7iJgSRnsKz+qur5pRDcIe4rbQCxRVlDtgkMpI/y0aHWWjbe5ezpoGyT5EQFxtZVyViOZ4/Ki3HT2XJKVNaIXibqP8AdG78SdybQB80K7lp7Ancon/pPPby138jOILMZaD8izCj1JJ5+i+taDxrr2e6bdsFrYwhVSAwE7RxyoxH1qh0Vwu6oVlWKyikqXAkhQT3kY9TFayd6REVVtnqSagW1RiRBtrBjccqJEV5/wCINB8C69sMSsBkJ5KOJWfccfavTLen0rWEvlrYDKCpc7BIG0bizDI2wcSIrGfxHRBdtukQ1sjHEKQRHt5v1pSkrFCDpsxui1bWb1u8p8yOrjt8rAx+leueJr6m/prqDej7nUjIhkIn2yw/NeN3DIr057Rt2OnhZI/szPHdi6i4QDnuVHHesZraN4XTRpOnaq1dR7AUpKkqWz5isZ94z9q818V9ORbhuDAuAbAOFZYV0HrnP0arrpvi22lwpcsm2Q2G3Bhk+XczRtH/AFcccUeL9Nu05a2TAYXQefI8q6iPQlT9jTfaYop00/DD6e2xYbTkQwkgDH6+tbnwprQt24gMm4N6exQCU+pBkD2+lYSxZDBf7wKRIz5Yx/Nwe1XmjcpbuKphgi/Df/EjKyklWHc5yPrzmrSbWjNtXs9b0V5zbJuArBMbgVlTGc85JrF6PpSDVuwUBkgqs7VEbgYHB7YGflMZprp3iphp2TUi5vuSS7Emf8I27iIG5G74pC+KrJvoqIRcd9rXYykyo2rwTJOOMiZiKz6kdPKP66sstR1NrdxLDRcKlviEgk7SSUQxnco2kn7etWmiRriqBbdWVFXbbNvbgchmGBkD7Vi+o6PVuyvbtAbQFYygLNu+Zi2DzmfQk1q/D2quBGW+EL+WBvtk8dhaLT2MkTmuhQ+Pt/wckslv+2XGms3LJNyApgzNyT98GOIoqr6t1p7Za3NtGGCGUhhIkTujsR24NdqeP+ieRVvLGCSSccz7ACsz1YzZth3CvZcWwoBlgFLI5943CYEwO9adPLtaDjMd8es98Gs54n05dUukQ72wWEEAMpMxPv8Ailk3ReN1ZE651BbunR1Oco+IyCG4HYjafzWctkiIx/z/AEatBp1+DKkZUq6zkOknd9CCv61Vpx/XYn/il2UtFjZDJbDAgFWKMMyTO4HiO/f2rQeGepFbmTAbyn0G75W+7CP81UdhTctugyxClO5LJAwBnK4z3/RGgbOeDHHpPIoWmS0bXxBdlrV1Vg23VlHdoZSQJznI+9a3omp0iadbV65aQ22uIVc21LBHYKSGyw2kVjr9s3rq3LjrvuNaEKQRgKCojEb3Cj/sPpWfu6y4dbduWslXfaSAQJkcMCCDntQ38kPi1HZvPFV+yjaa7bA2G4VwsLtCw0CMDJ/NedeIdA9vUsLY8qndbIHZm3hR6kEnFXPVbhXS2LN1LgdTcukKm0BWdhALQIiIgEVn9f1R2CgDYsAc7nIBkFnI7HIiKtvRMVssb2iDWE1Rub3doKGSdoDZJ9Rtgzzz3zK8ZtNvSoZJW0Cf8yoY/QVI0F0NbT+7R53bpUjaxhXDAYDSCcQDIMCleLb9sCyyBQRbUOuZ3KAsjEQBA55FZOuVGyhJQ5eMxj2yRO08fXn1r0fq2pazc0tqc2rNu2PWVUFyPcFEH+aqPoGpt3b9o3T5AdzL6lQWVR9WCjnvUbxD1Tffe4uG+IxUj/tCnnH+ERjt70TStIIOlY5r7Nr44uOrfCbcGSUW5sE7YUvzwcYwRNRL9tjYQLd2qhaFdgBD+ZeCQ/HHI9IzRpDudceZiFHJYk4GTkk+9WV/TG1becuDwIgETBJ7wYwBRHsJteFXpvhhmVY2FN3eFYDzCewJmJqNoLqbtygiW4PEcEEDBH1pmxqwblxirAMHMK3ysc59Rzj39qR0yCYlhxicE/T81omZNF71RS1p1d0LqRFtQo2ggyQAcZCyKpRbVrG9cOpyQTOO9M37zfFa5GdxJ9D6j7ipekUC5cSQFYSJPIMQB7+b9KXK2FUa1PFty0yW7iWXW4ttzeNuXRbiTEgfNM9icc+jHiDxhqN/w9Nq3W0FHykTuMzDIc4j/EYrH3LqlQGckr5VWOwODP0A/FRzeXsCT70+V7bEo10jV6PxB8TT/wBnuo1x9xJukljydpYniJwc8fSCovhbQltzskAQBIPPds4HaikKXZtXs2w6hLg2w26GViDIKwCefm4qg8WahrezzeQliq4BHmxMjAI7D0HpStM+xdyiYjuAB7sT2/3qp6zde+9sXDG5guOFScxHpJomwgOdJtIbrae2pYOj7TyZIkMBHZRtj3Pes9qrZVipHOf6itB1naLwuJtTepUqhOCPKwkmcx9DNVXVWnZ9OfvUxKbF9EQnUIgOf8LDkHbuBGfbirHS9OF98PbsJiWbCjywxRFEniYxzzVHpAfiASQfUTI8uCI4+tXPVtT8NlVCPMCT6ATtX7/MT9qUm/DfFCMk3J0kaZDoLCoo+NqHQhg0m2huBp3bVlucwSaiv1VUYtZtW7THlkWD9ywkmsu+qJ5ZgPUDbBmDnPGTjmBSG1/p2rKSk+zvwvD4n/0t+rax3UM7FjkEkk85A+kg496z+o81tT3UbT9uD+IqZ/biybCcOSSP+wQh/wDJx96rN5ll5DD9pj962g/jRw/kpPK3Esum64qnc8BhMCRhT91gf5K5f1DXLjbiAAgUAniTuxHJmTVTYulSffB+nM/Yia694hjBiQJj6f8ANS+7J5y48b0O6W4VaM+o+opGqYh5P9eopBIJmSI7fTvP4py65IDAfXjnvg1V2Z9M0N3Qzo2v2mKtbKPg5NskKW9QVdk79z6VI1OqD2hckbmO9xiNr7gSe3zEH7VC6Hed7bWQ5g27qFD2H/2B/pj/AMfpVTb1M2nU5ll/SIH0gGiPYPoW+xXbbBUwuCCPMTM/YUi3pmBLIcqSCJz3GPb61HubSoKiJgETiRORNThYOwOrCYG5eJEkSPUHaR7QPWqWxPRD1F47mxyBg9jtH65NNvJ28gwB+Mf7Vd6PSK7bhmSfek+ItL8JrbrnHeIBViQI5iprtjT8Ka/bIILCJ7x+TVtoOlQwLZ+lXnXNCH04ZVztDpj2BKj7frTvh1g9hSw8ykqe3ymBPvEU62S26LXS6lEti2qAcTmf3ort4IeCJ/Ue9FUQMdPUbTIxEERM+1Z/XWnF1vhqW2CYJyN3YH8/irVbwBgGoukcG7cE+ZiCM8gTj7H96JIUdGduap2YlwRGc+sionxCUzzJ/YVs+saJTaJQK9wFTA7wQSPpFV/iu5Ya0nwra23V/MoWCAV4J7wQPzU1RonZV9Qa2Lu60xZSkeYBWVtpUqQCeIGe9PWrRvABGIugQyNgmB8yYzjkcj3FJ6tpZ0+ndZbykGBxkET+oz6VCvatXYOyHf5ZIbGABuj1xxSaLjJraDUWyhKsQGHIPI71DZ/cf19aVeJZiSfzjjHamYqaLc5PtiluEEGeM09eHDD2I/8AVMoPUT+f9KcQzAiM454PPNOP0Q/sLohgynmDxwe4j6g0m/k7owf9hTzLgA+n7Gf9aZY4K+8j9qqSEmJtEzjvinFzI7n/AE/o0yJBmnVaGB9/3/4qUNkrR6n4TlzklHA7QWUqDHfk4/8AVRrFyFYTElfvG7/ek6j5jn8f80hOD9v3oT2Hg/bEgD7n68f19ae1duFDDEGPfOR9ODSdPiAe/HuKkaxTsxnI7SeKon00Ph63bZB549Tk59xyf+KsD0PT3Ha5duXXmQoGABGQARgQeKwuk1Vy025Cyn6R+avun+LbgJ+KFfjaQqiPaFiRx70WmFNF3regsxHw7lwLHDnAEYGDH2qv03Rr1ksCNyklpEx9czS38VSASpn0JAAjiI/NB8TXCICfTMxA9YoEI1Nxk43Hv6c+hNFRr+u34NscfzCf/Ef1migVDKagnuadS2rGYgnMiq23dqZYeqJLvSh0+Uh/Y4/Xj80dT1S3Ea3cOxiAFhVO2DOSIPI7U1Y1C4jzH8/oaffzqRcgL6ZLckAjbwR7nj14oAy7X7lsFFuB05+n0kSP2pqxfU4ZQ3uZn805rhs8uTmZPf3qOqn3B9KksTetgkwvt6/rS9PokPzSPpmnkRomQPuJ/HP3pDuRiZoDYXNKFmAcdjg/eo6JzMCPXn2Cg8mnVc1y5ZLGQQDmMH9ySaARFVzugk48uew4/T/Snb0qQrKY5g4kcTNKTRfzNEcQCc/pUbUNLHJPaW5xSuitM78OkOZgClLdxByK45HaKQzuoaTJJM1zdjHOKQqE0FSKQxUk1LXWusAqMeo/r2qADSy5Pc0WKi1t9YK8pjvnkfin26ujCFsr2ktBzHMR61T2bsHImrC3qbcQba/Ue+O1UmJok2+rDdPwrfaYQfXuK7qtWjDCBWzkH7kRHH+1Mo9swJIE8f1/rSjYU8EH6ZP60EkPef6/2op9tA54/wBqKB6I4uRxT1l85quF2l/GPrTsXEvrWqgYMen9H+s098Y/4iQCe+B9vtWet3yDO4iPSp9vVKRBUExgmCZ++APpFOw4kjX37bKOT+n0g5mq7+0HsPpPPv8AtUnUWGGCvbmZxj9frV74I6Yt287XVVlRAApQNLucQIPAVvpIpdj6RlQWJy0fcV1Ynmf69a9Y1ul09lwh6e7naGlNKHABJABIGDjj3qHc6Pb1rpp7OjfT+YPddtMLTC2siEPcliByPwDQKzztWCn5RgZkx9896d+KTJAEAZjgDHcfUd+9e1afw/Z+ObC6NAERXZ2tjZJMKgKq25oBJziR61mek6bQp1bWDVXLNr4ZtiyjIBbJZAWIUgLK7VwRyxMTRY6PNrt0H/EtRru08kfp+9e/6kapy1zR2tFqLGdhJfcdoyJVSkzI5ql/hx1dNY94Nobe0E3WdQGbddaLaBSoAUIhEznZMZMKwSPEGWO4NIr2TxV1oarUXul6bSIi77aXNQibmtqGQ3WZVWAFO5Sdw4OayXjbwja0SSjXy+8AbkJtm2VkO1wIqo+7GwFsQZzUlmJUxTgu+opqikA+Ap9KU2mxKmfao1LRyMimBzbTi0v44PzCfcUu0ls9z/X2piBHjFOBqS1odia4yehmmIfTUkcGioZY96KLJoj0UUVBoANS7Oq2ztUT75jj/aolKVopoCU+odjJzwIPEDtB+le0fwt6hoNJol+PqLC3rjM7hmXcoMKin08qgx/1GvFt6gCPvTuh05vXUtLO53VRAkjcQCYHMDP2piPe9L1vqd+bmmOiW0zMbfxE1JcW9x2Fyi7QSsHnvSlfqoYub/TwxABO27lVJIHAMDc35PrVZr9LatIxBv2EPkRjedQpKwDDuELYkDjHFUet01pLT3F6vqXZUd9v9rt7mKqSFADEkmIoomyy6drepWEuXm1+nuKu8H4zXGxaYh2t21VeSrAHvtxAM1E0XU9U9l9WbOgb4ha6yXbbtcZjCADJA3bVAE9xTmr6Ul/Qi3p+oIxdEU/E1CLaAlTcISNwbBwf5jOc0Xjp1uWtLb16FV2u265Z+FZW0AU2MqgF/ifDhWLYVpmmGy71f/yPwvgLqOm6ZXBUBN6EbvmCbsA+bsJzVJ0npfUulPa01htK41VwjfDkqUt7juBjyBFZsT34kU1ebS3tX8K/rrTtYVXt3rhti3LEFlUoQjMIQ5B5PpFI6fq7l3WXf7V1LTKtlCunuzaZHF1vMVQkKW2IVafl3ERkGgdkbS9C6jpdVd09m/p7ralGuaosga2FLOAbm5Tlizwo5zOBid1jwXrNfsS7rrLvZBUKtsKVUxhgjcYHIpXQ9fZvXtSo6hYsutwIC9m1F5LaKquhYhQpf4pCrwH7zTGg0dvQNf1D9S0rXLjTI23DsBY7VQ7jJJHHG0CaQWZzov8ADHVX7mots6WzYZUZvmVmZd3lIjhShz/OPeo3RfAT6k3tt9Qtq61oNsYhynLDOBkc+tej+FOt27+kusl20t64bry7ohR2BVGdJEgKqcemKptVqLOi0KaG3qLRuv5C6uCqtdbz3SQcKoYwTHyiigsz/Sf4ZvctC7d1SWlbzINhZin+F2G4bJEGMxInOKi+JPA9rS6dry65brKVARbcFizAYbefc8dq3em1RCJbv39DftAKr7WuBnAHdS/wwcDtHtWB/iLqNGz210lu2rDcbhtkEZgKpKgAnB+n3oaBPZia7XKKkoUHPrTgu0zNFOwJIvzRUaiixUFFFFIYUCiigDtWPQ+qtpby30VGdJ2hwSoJBWSAROCaraKAPZfChvdeJGuCDTWGVtttWQ3LhVgqltxhQpYmIOR61oeunpmjYWl6Wl4gSStmyQPQF7hBZvpNZH+FfVNL/Zn017ULYc3CwDlQjhlQA+bG4bSI9Iq30/TbNp79zV67S3bTH+6tC4UW2u47Su0ja0EAheczJqkiW2Yrx91vQ3ltppNF/ZnVmN3dbS2xG0BFGwmVMse3ApjwXo+mtZ1DdQuBWby2YZw1si3cZrgVSA2QgAMgnHeq3xjrrF3UTpli2qhQfN5jJJYbjuAzAn0nvWepMaPXrfTvDwvsWe18NvhoifGvkAhS926zq0iSyoASF8hPest18dMTR2jYthtTcRQ8XHK2SjNuuEbsvcDL5TIUKcA84qikM9ITQ9HXS2FvvaFxinxblm7duOkKzuSu3b59qptCQm6dz1nvHSaJdQq6AJ8MWk3lGuMpuksX2tcJJEFRj95rMUUAFFFFABRRRQAUUUUAFFFFABRRRQAVct4cvgSQsf8Ad96pqX8Vv5j+TQBNfpN0OUgFgu/BHygxOf2rrdGvCZQYk/OnAIHr6kfmq9mJ5JP1rlAEzUdOuIu9lhZiZBzkdj6g/iodFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0tk8An6CaRXVYjgxQA41hhyrCOcGp13pcIHFxCSWEblCysYVt2TBB4HNV28+p/Nd+K0RuMfU0AIooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z",
      rating: "5",
      Description:
        "In the film, Dominic Toretto, Brian O'Conner, and the team are offered amnesty for their past crimes in exchange for apprehending a mercenary organization, one member of which is Toretto's presumed deceased lover and wife, Letty Ortiz.",
    },
  ]);
  const [formKey, setformKey] = useState(5);
  const [inputKey, setinputKey] = useState(5);
  const [buttonpopup, setbuttonpopup] = useState(false);
  const add = (newmovie) => {

    setMovies((movies) => [...movies, newmovie]);
  };
  const [Inputsearch, setInputsearch] = useState("");
  const [InputRating, setInputRating] = useState("");

  return (
    <div className="MovieList">
      <form>
        <input
          key={inputKey}
          type="text"
          placeholder="Search for a movie"
          onChange={(e) => setInputsearch(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>


      </form>
      <button className="Add" onClick={() => setbuttonpopup(true)}>
        Add Movie
      </button>
      <div
        className="MovieListitems"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {movies
          .filter((movie) =>
            movie.Title.toLowerCase().includes(
              Inputsearch.toString().toLowerCase().trim()
            ) && movie.rating>=InputRating
          )
          .map((movie) => (
            <MovieCard
              key={movie.id}
              posterURL={movie.posterURL}
              rating={movie.rating}
              Title={movie.Title}
              Description={movie.Description}
            ></MovieCard>
          ))}

        <FormAdd
          key={formKey}
          setformKey={setformKey}
          trigger={buttonpopup}
          settrigger={setbuttonpopup}
          add={(M) => add(M)}
        />
      </div>
      
    </div>
  );
}

export default MovieList;