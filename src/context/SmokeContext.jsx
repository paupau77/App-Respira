import { createContext, useContext, useMemo, useState } from "react";

const SmokeContext = createContext();


export function SmokeProvider({ children }) {

  const stored =
    localStorage.getItem("respiraData");


  const savedData =
    stored ? JSON.parse(stored) : {};


  const [quitDate, setQuitDate] =
    useState(savedData.quitDate || "");


  const [cigarettesPerDay, setCigarettesPerDay] =
    useState(savedData.cigarettesPerDay || 0);


  const [cigarettePrice, setCigarettePrice] =
    useState(savedData.cigarettePrice || 0);


  const [name, setName] =
    useState(savedData.name || "");


  const [reason, setReason] =
    useState(savedData.reason || "");



  function saveData(data) {

    localStorage.setItem(
      "respiraData",
      JSON.stringify(data)
    );

  }



  function updateField(field, value) {

    const newData = {

      quitDate:
        field === "quitDate"
          ? value
          : quitDate,


      cigarettesPerDay:
        field === "cigarettesPerDay"
          ? value
          : cigarettesPerDay,


      cigarettePrice:
        field === "cigarettePrice"
          ? value
          : cigarettePrice,


      name:
        field === "name"
          ? value
          : name,


      reason:
        field === "reason"
          ? value
          : reason

    };


    saveData(newData);


  }



  const value = useMemo(() => ({

    quitDate,
    setQuitDate: (v) => {
      setQuitDate(v);
      updateField("quitDate", v);
    },


    cigarettesPerDay,
    setCigarettesPerDay: (v) => {
      setCigarettesPerDay(v);
      updateField("cigarettesPerDay", v);
    },


    cigarettePrice,
    setCigarettePrice: (v) => {
      setCigarettePrice(v);
      updateField("cigarettePrice", v);
    },


    name,
    setName: (v) => {
      setName(v);
      updateField("name", v);
    },


    reason,
    setReason: (v) => {
      setReason(v);
      updateField("reason", v);
    }


  }), [
    quitDate,
    cigarettesPerDay,
    cigarettePrice,
    name,
    reason
  ]);


  return (

    <SmokeContext.Provider value={value}>

      {children}

    </SmokeContext.Provider>

  );

}



export function useSmoke() {

  const context =
    useContext(SmokeContext);


  if (!context) {

    throw new Error(
      "useSmoke debe utilizarse dentro de SmokeProvider."
    );

  }


  return context;

}