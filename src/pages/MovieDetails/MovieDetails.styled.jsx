import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const BackLinkWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const CardMovie = styled.div`
  display: flex;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

export const CardImg = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const MovieInfo = styled.div`
  margin-left: 30px;
`;

export const GenresInfo = styled.div`
  display: flex;
`;

export const GenreItem = styled.p`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const AdditionalInfo = styled.div`
  padding-bottom: 10px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;
