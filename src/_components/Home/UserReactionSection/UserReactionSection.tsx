import RyanImage from '@/_assets/images/userReaction/ryan.png';
import AtomImage from '@/_assets/images/userReaction/atom.png';
import BrgndyImage from '@/_assets/images/userReaction/brgndy.png';
import LeesangImage from '@/_assets/images/userReaction/leesang.png';
import FingerHeartIcon from '@/_assets/images/fingerHeart.svg';
import Ticker from 'framer-motion-ticker';
import {
  bold,
  commentContainer,
  fingerHeartIcon,
  logoFont,
  primaryColor,
  tickerWrapper,
  userReactionHeading,
  userReactionSectionContainer,
} from './userReactionSection.css';
import UserReactionItem from './UserReactionItem';

const DURATION = 35;

export default function UserReactionSection() {
  return (
    <section className={userReactionSectionContainer}>
      <h2 className={userReactionHeading}>
        많은 개발자들이 <span className={primaryColor}>매일메일</span>을 애용하고 있습니다{' '}
        <FingerHeartIcon className={fingerHeartIcon} />
      </h2>
      <div className={tickerWrapper}>
        <Ticker duration={DURATION}>
          {USER_REACTIONS.map((user, index) => (
            <UserReactionItem key={index} {...user} />
          ))}
        </Ticker>
      </div>
    </section>
  );
}

const USER_REACTIONS = [
  {
    thumbnailImg: RyanImage,
    name: '박◯영',
    background: '비전공 FE 개발자',
    commentNode: (
      <div className={commentContainer}>
        &quot;무엇부터 학습할지 막막했는데, <span className={logoFont}>매일메일</span> 덕분에{' '}
        <span className={bold}>중요도 높은 주제</span>를 우선적으로 학습할 수 있었습니다.&quot;
      </div>
    ),
  },
  {
    thumbnailImg: AtomImage,
    name: '이◯늘',
    background: '컴퓨터공학과 전공생',
    commentNode: (
      <div className={commentContainer}>
        &quot;<span className={logoFont}>매일메일</span> 컨텐츠의{' '}
        <span className={bold}>꼬리질문</span> 덕분에 얕게만 알고 있던 개념들을 확실히
        이해했습니다.&quot;
      </div>
    ),
  },
  {
    thumbnailImg: BrgndyImage,
    name: '전◯헌',
    background: '토스 최종 합격자',
    commentNode: (
      <div className={commentContainer}>
        &quot;<span className={logoFont}>매일메일</span> 컨텐츠는{' '}
        <span className={bold}>면접과 유사한 톤</span>으로 작성되어 있어, 실제 기술 면접에서 큰
        도움이 되었습니다!&quot;
      </div>
    ),
  },
  {
    thumbnailImg: LeesangImage,
    name: '이◯상',
    background: 'JAVA 개발자',
    commentNode: (
      <div className={commentContainer}>
        &quot;<span className={logoFont}>매일메일</span>을 구독하면서{' '}
        <span className={bold}>출퇴근 길에 쇼츠 대신</span> 기술 컨텐츠를 하나씩 읽게
        되었습니다.&quot;
      </div>
    ),
  },
];