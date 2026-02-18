import {type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard"
import type { cardInList } from "@/components/Interfaces/web/recruitmentCard";

export const sortingButtonType = (
  scheduledIds: string[], 
  ongoingIds: string[], 
  RecruitmentCards: RecruitmentCardType[]
  
): cardInList[] => {
  return RecruitmentCards.map((item) => {
    const isScheduled = scheduledIds.includes(item.id);
    const isOngoing = ongoingIds.includes(item.id)
    let buttonTitle =""
    if (isOngoing) {
      buttonTitle = "参加";
    } else if (isScheduled) {
      buttonTitle = "参加取消"; 
    } else {
      buttonTitle = "参加予約"; 
    }
    return {
      ...item,
      ButtonTitile: buttonTitle,
    };
  });
};