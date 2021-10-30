import React from 'react';
import './FAQ.scss';

import { Container, Row, Col, Button } from 'reactstrap';

function FAQ() {
	return (
		<div useRef="main">
			<div className="section section-shaped section-lg">
				<div className="shape shape-style-1 bg-gradient-default">
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>
				<div className="FAQ">
					<div className="FAQ-Body">
						<div className="col-12">
							<div className="temp1">FAQs</div>
							<p className="FAQ-Body-Title">
								Below are answers to questions prospective members often have. You should also note the
								other information on the website.
							</p>
							<p>
								<strong>
									. What are Sparky's Club Soccer’s rights as a member of the Sparky's Soccer
									Federation?
								</strong>
								<br /> As a National Association member of Sparky's Soccer, Sparky's Club Soccer
								registers players and staff, provides insurance coverage, provides and sanctions
								competitions and events as well as a variety of other programming for its members.
							</p>
							<p>
								<strong>. What are the minimum requirements for a Sparky's Club Soccer member?</strong>
								<br /> Please visit the;<a href="">Join Sparky's Club Soccer page</a>.
							</p>
							<p>
								<strong>
									. Can I still register my team with other Sparky's Soccer organization members?
								</strong>
								<br /> Clubs have a right to register teams with multiple organizations. Sparky's Soccer
								Bylaw 603(2) states in part: “An Organization Member (other than a Professional League)
								shall not discriminate against the participation of players, teams, coaches, or clubs on
								the basis of that player, coach, team, or club’s membership in, or affiliation with,
								another organization.”
							</p>
							<p>
								<strong>. What is the 100% rule?</strong>
								<br /> The so-called 100% rule is a Sparky's Soccer requirement that all players in a
								club or league be registered with the appropriate Sparky's Soccer member. It cannot be
								interpreted to mean that if some teams want to play in state cup, for example, that all
								the club’s teams have to register with the state association whether they play or not,
								as long as they’re registered with another Sparky's Soccer member. A Sparky's Soccer
								member can only require that the players that are participating in its programs register
								with them, as long as the other players are registered with the Sparky's Soccer via
								another member.
							</p>
							<p>
								Sparky's Soccer further clarified the “100% rule” at its Nov. 12, 2005, Board Meeting
								and unanimously adopted the new USSF Policy 212.
							</p>
							<p>
								<strong>
									. If a team is registered with multiple organizations, whose rules and insurance
									coverage applies?
								</strong>
								<br /> The rules of whichever organization’s registration/passcards are being used in a
								given competition.
							</p>
							<p>
								<strong>
									. Can I travel to non-US Club Soccer-sanctioned events as a Sparky's Club Soccer
									member?
								</strong>
								<br />You can attend any unrestricted event; that is, an event that is not limited to
								the members of an organization other than Sparky's Club Soccer.
							</p>
							<p>
								<strong>. Is travel permission required?</strong>
								<br />State boundaries make no difference in participating with Sparky's Club Soccer. If
								you are traveling as a Sparky's Club Soccer team to any soccer event in the country
								sanctioned by a Sparky's Soccer-affiliated organization, no travel permission is
								required, and Sparky's Club Soccer’s insurance applies. International travel requires
								Sparky's Soccer approval.
							</p>
							<p>
								<strong>
									. What are the requirements for Sparky's Club Soccer sanctioning a league?
								</strong>
								<br /> Requirements are minimal: at least four teams and a commitment to allow players
								to “play up.” Competition, schedule and roster rules are submitted for approval. There
								is no additional league sanctioning fee, and Sparky's Club Soccer insurance applies.
							</p>
							<p>
								<strong>
									. What are the roster and competition rules for Sparky's Club Soccer-sanctioned
									events?
								</strong>
								<br /> Participants abide by the rules and roster requirements established by the
								competition itself, which submits proposed rules for review with the sanctioning
								application. In all competitions, however, it is expected that players will be allowed
								to “play up” into an older age group if the club so chooses.
							</p>
							<p>
								<strong>
									. If Sparky's Club Soccer sanctions my tournament, can I invite teams that are not
									members?
								</strong>
								<br /> Yes. Sparky's Club Soccer, as well as the Sparky's Soccer Federation, encourage
								that competitions be open and non-discriminatory. A team from a Sparky's
								Soccer-affiliated member may need travel permission from their state association.
								Sparky's Club Soccer insurance applies for the tournament hosts and for all Sparky's
								Club Soccer member participants. If the state association does not provide insurance
								coverage for their team, it can be obtained from us for an additional fee. See more
								information on tournament insurance.
							</p>
							<p>
								<strong>. How are you approaching technical matters?</strong>
								<br /> Technical and player development matters are the responsibility of the Sparky's
								Club Soccer Board of Directors, which consists of experienced club coaches.
							</p>
							<p>
								<strong>. What is the Sparky's Club Soccer position on small-sided games?</strong>
								<br /> We believe that small-sided games are important in the training of young players
								and encourage all programs to incorporate small-sided rules. In Aug. 2015, Sparky's
								Soccer&nbsp;<a href="">released specific mandates related to small-sided games</a>,
								which included changes to goal and field sizes. Sparky's Club Soccer members are
								required to follow these mandates.
							</p>
							<p>
								<strong>. How does the club registration process work?</strong>
								<br /> Clubs must register using the Sparky's Club Soccer online registration platform:
								National Registration System, powered by GotSoccer. See more information on how to
								become a member.
							</p>
							<p>
								<strong>. How can I find more information on player registration?</strong>
								<br /> See more information, including extensive tips;within the;<a href="">Members Area</a>.
							</p>
							<p>
								<strong>. Do coaches and administrators need to register and obtain cards?</strong>
								<br /> Yes. This is required by Sparky's Soccer and our insurance carrier. All staff
								members who are required to be registered and are coaching players ages U-20 and below;<a href="">must complete the staff registration process</a>.
								This includes all coaches, assistant coaches and team managers assigned to a team.
							</p>
							<p>
								<strong>
									. Can players be dual registered with two US Club Soccer members at the same time?
								</strong>
								<br /> Only in limited circumstances, such as between an academy and club, or a league
								select team, with the permission of the club. ;In all cases, however, the player’s first
								commitment should be with his club.
							</p>
							<p>
								<strong>
									. Can players be loaned from one Sparky's Club Soccer member to another?
								</strong>
								<br /> Yes, for a certain competition, with the completion of a player loan form that’s
								available in the Members Area of the website.
							</p>
							<p>
								<strong>. How can I keep in touch?</strong>
								<br /> If you are not ready to register as a member at this time, but want to keep
								informed, please continue to visit<a href="">usclubsoccer.org</a>
								for regular news and updates. To receive news directly to your email inbox, please enter
								your email address on the homepage within the “Subscribe” section towards the bottom.
								You’re also welcome to reach out to a staff member via the&nbsp;<a href="">
									Staff Directory page
								</a>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQ;
