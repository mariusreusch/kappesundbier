import { ResponseResultState } from './response-result-state';

export class DeleteRecipeResult {

  constructor(public state: ResponseResultState, public deletedRecipeIdResponse?: { deletedRecipeId: string }) {
  }
}
