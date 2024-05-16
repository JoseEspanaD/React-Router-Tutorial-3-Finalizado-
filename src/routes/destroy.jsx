import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  //throw new Error("oh dang!"); (ESTE ERROR ERA POR DIVERSION)
  await deleteContact(params.contactId);
  return redirect("/");
}