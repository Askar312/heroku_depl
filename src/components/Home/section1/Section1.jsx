import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import "../section1/Section1.modul.css"

export default function TitlebarImageList() {
  return (
      <div className='container'>
    <ImageList  sx={{  width:"97%" , height: 600 }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">Популярные товары</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
          
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F03%2Fcasetify-insert-name-here-inh-collaboration-phone-cases-tw.jpg?w=960&cbr=1&q=90&fit=max',
    title: ' CaseTify',
    author: '',
    rows: 3,
    cols: 3,
    featured: true,
  },
  {
    img: 'https://itk-assets.nyc3.cdn.digitaloceanspaces.com/2021/03/casetify-her-impact-matters-collection.jpg',
    title: ' CaseTify',
    author: '',
  },
  {
    img: 'https://i.ebayimg.com/thumbs/images/g/ZEsAAOSwpgRgdgKF/s-l300.jpg',
    title: ' CaseTify',
    author: '',
  },
  {
    img: 'https://9to5toys.com/wp-content/uploads/sites/5/2022/02/CASETiFY-SpongeBob.jpg?w=1200&h=675&crop=1',
    title: 'CaseTify',
    author: '',
    cols: 2,
  },
  {
    img: 'https://softech.kg/image/cache/54d8e1aa049541590a400e00f8564dff.jpg',
    title: 'Apple Iphone 13 pro',
    author: '',
    cols: 2,
  },
  {
    img: 'https://www.rollingstone.com/wp-content/uploads/2021/05/Casetify-featured-image.jpg?resize=1800,1200&w=450',
    title: 'CaseTify',
    author: '',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.insider.com/5fdcbfcbc910a400192e846c?width=700',
    title: 'Apple Iphone 12 promax',
    author: '',
  },
  {
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604686090000',
    title: 'Apple Airpods Max',
    author: '',
  },
  {
    img: 'https://www.sbsmobile.com/gre/190981-home_default/silicone-case-for-apple-airpods-pro.jpg',
    title: 'Apple Airpods Pro',
    author: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.iphones.ru/wp-content/uploads/2019/10/apple-airpods-pro-press-release-1080.jpg',
    title: 'Apple Airpods Pro',
    author: '',
  },
  {
    img: 'https://yablyk.com/wp-content/uploads/2021/05/baseus-protect-glass-iphone-5.jpg',
    title: 'Защитное стекло',
    author: '',
  },
  {
    img: 'https://icdn.lenta.ru/images/2021/06/30/11/20210630112638820/square_320_df94655b0172572e6fc597ec4f6aa571.jpg',
    title: 'Кабель',
    author: '',
    cols: 2,
  },
];
