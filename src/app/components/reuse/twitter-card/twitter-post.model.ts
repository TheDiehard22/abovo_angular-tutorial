export class TwitterCard {
  profile_url: string;
  user_id: string;
  at_name: string;
  posted_date: Date;
  content: string;

  constructor(
    profile_url: string,
    user_id: string,
    at_name: string,
    posted_date: Date,
    content: string
  ) {
    this.profile_url = profile_url;
    this.user_id = user_id;
    this.at_name = at_name;
    this.posted_date = posted_date;
    this.content = content;
  }
}