import {type RecruitmentCardType } from "@I/web/recruitmentCard"
import type { cardInList } from "@I/web/recruitmentCard";

export const sortingButtonType = (
  scheduledIds: string[], 
  ongoingIds: string[], 
  RecruitmentCards: RecruitmentCardType[]
  
): cardInList[] => {
  return RecruitmentCards.map((item) => {
    const isScheduled = scheduledIds.includes(item.id);
    const isOngoing = ongoingIds.includes(item.id)
    let buttonTitle =""
    let people = item.apo_people
    if (isOngoing) {
      buttonTitle = "参加";
      people = item.join_people
    } else if (isScheduled) {
      buttonTitle = "参加取消"; 
    } else {
      buttonTitle = "参加予約"; 
    }
    return {
      ...item,
      ButtonTitile: buttonTitle,
      people:people
    };
  });
};