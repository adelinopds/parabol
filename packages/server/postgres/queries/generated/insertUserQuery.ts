/** Types generated for queries found in "packages/server/postgres/queries/src/insertUserQuery.sql" */
import { PreparedQuery } from '@pgtyped/query';

export type TierEnum = 'enterprise' | 'pro' | 'personal';

export type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

/** 'InsertUserQuery' parameters type */
export interface IInsertUserQueryParams {
  users: Array<{
    id: string | null | void,
    email: string | null | void,
    createdAt: Date | null | void,
    updatedAt: Date | null | void,
    inactive: boolean | null | void,
    lastSeenAt: Date | null | void,
    preferredName: string | null | void,
    tier: TierEnum | null | void,
    picture: string | null | void,
    tms: Json | null | void,
    featureFlags: Json | null | void,
    lastSeenAtURLs: Json | null | void,
    segmentId: string | null | void
  }>;
}

/** 'InsertUserQuery' return type */
export type IInsertUserQueryResult = void;

/** 'InsertUserQuery' query type */
export interface IInsertUserQueryQuery {
  params: IInsertUserQueryParams;
  result: IInsertUserQueryResult;
}

const insertUserQueryIR: any = {"name":"insertUserQuery","params":[{"name":"users","codeRefs":{"defined":{"a":36,"b":40,"line":3,"col":9},"used":[{"a":455,"b":459,"line":33,"col":10}]},"transform":{"type":"pick_array_spread","keys":["id","email","createdAt","updatedAt","inactive","lastSeenAt","preferredName","tier","picture","tms","featureFlags","lastSeenAtURLs","segmentId"]}}],"usedParamSet":{"users":true},"statement":{"body":"INSERT INTO \"User\" (\n  \"id\",\n  \"email\",\n  \"createdAt\", \n  \"updatedAt\",\n  \"inactive\",\n  \"lastSeenAt\",\n  \"preferredName\",\n  \"tier\",\n  \"picture\",\n  \"tms\",\n  \"featureFlags\",\n  \"lastSeenAtURLs\",\n  \"segmentId\"\n) VALUES :users","loc":{"a":241,"b":459,"line":19,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO "User" (
 *   "id",
 *   "email",
 *   "createdAt", 
 *   "updatedAt",
 *   "inactive",
 *   "lastSeenAt",
 *   "preferredName",
 *   "tier",
 *   "picture",
 *   "tms",
 *   "featureFlags",
 *   "lastSeenAtURLs",
 *   "segmentId"
 * ) VALUES :users
 * ```
 */
export const insertUserQuery = new PreparedQuery<IInsertUserQueryParams,IInsertUserQueryResult>(insertUserQueryIR);


