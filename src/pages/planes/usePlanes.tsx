import { useEffect, useRef, useState } from "react";
import { useUser } from "@/hook";
import { IPlan } from "@/types.d";
import { getPlanes } from "@/services";
import { getAge } from "@/utils";

export function usePlanes() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [counter, setCounter] = useState(1);
  const [planesList, setPlanesList] = useState<IPlan[]>([]);
  const route = "/";
  const { updateUser, user } = useUser();
  const contentRef = useRef<HTMLDivElement>(null);
  const totalPagination = planesList.length;
  const enableLeft = counter > 1;
  const enableRight = counter < totalPagination;

  useEffect(() => {
    resetUserPlan();
    loadPlanes();
  }, []);

  function resetUserPlan() {
    updateUser({
      plan: { name: "", price: 0 },
    });
  }

  async function loadPlanes() {
    if (!user?.birthDay) return;

    const age = getAge(user.birthDay);
    const data = await getPlanes(age);
    setPlanesList(data);
  }

  // Planes Slider
  useEffect(() => {
    if (contentRef.current && totalPagination > 0) {
      const slideWidth = contentRef.current.clientWidth;
      contentRef.current.scrollTo({
        left: slideWidth * (counter - 1) - 50,
        behavior: "smooth",
      });
    }
  }, [counter, totalPagination]);

  // Reset slider on option change
  useEffect(() => {
    setCounter(1);
  }, [selectedOption]);

  function handleOnClickSelection(option: number) {
    setSelectedOption(option);
  }

  function handleOnClickControl(value: number) {
    setCounter((prevState) =>
      Math.min(Math.max(prevState + value, 1), totalPagination)
    );
  }

  return {
    properties: {
      selectedOption,
      counter,
      planesList,
      route,
      user,
      contentRef,
      totalPagination,
      enableLeft,
      enableRight,
    },
    methods: {
      handleOnClickSelection,
      handleOnClickControl,
    },
  };
}
