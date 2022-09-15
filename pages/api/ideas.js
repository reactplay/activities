import { listOfIdeas } from "../../dummydata"
export default function ideasListHandler(req, res) {

  return res.status(200).json({
    data: listOfIdeas
  });
}