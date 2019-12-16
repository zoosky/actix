(function() {var implementors = {};
implementors["actix"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/struct.SpawnHandle.html\" title=\"struct actix::SpawnHandle\">SpawnHandle</a>",synthetic:true,types:["actix::actor::SpawnHandle"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/struct.Addr.html\" title=\"struct actix::Addr\">Addr</a>&lt;A&gt;",synthetic:true,types:["actix::address::Addr"]},{text:"impl&lt;M&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/struct.Recipient.html\" title=\"struct actix::Recipient\">Recipient</a>&lt;M&gt;",synthetic:true,types:["actix::address::Recipient"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/struct.WeakAddr.html\" title=\"struct actix::WeakAddr\">WeakAddr</a>&lt;A&gt;",synthetic:true,types:["actix::address::WeakAddr"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/struct.Context.html\" title=\"struct actix::Context\">Context</a>&lt;A&gt;",synthetic:true,types:["actix::context::Context"]},{text:"impl&lt;A, I, E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/struct.ActorResponse.html\" title=\"struct actix::ActorResponse\">ActorResponse</a>&lt;A, I, E&gt;",synthetic:true,types:["actix::handler::ActorResponse"]},{text:"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/struct.MessageResult.html\" title=\"struct actix::MessageResult\">MessageResult</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as <a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a>&gt;::<a class=\"type\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::handler::MessageResult"]},{text:"impl&lt;I, E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/struct.Response.html\" title=\"struct actix::Response\">Response</a>&lt;I, E&gt;",synthetic:true,types:["actix::handler::Response"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/struct.Supervisor.html\" title=\"struct actix::Supervisor\">Supervisor</a>&lt;A&gt;",synthetic:true,types:["actix::supervisor::Supervisor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"actix/enum.ActorState.html\" title=\"enum actix::ActorState\">ActorState</a>",synthetic:true,types:["actix::actor::ActorState"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"actix/enum.Running.html\" title=\"enum actix::Running\">Running</a>",synthetic:true,types:["actix::actor::Running"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"actix/enum.MailboxError.html\" title=\"enum actix::MailboxError\">MailboxError</a>",synthetic:true,types:["actix::address::MailboxError"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/dev/struct.ContextParts.html\" title=\"struct actix::dev::ContextParts\">ContextParts</a>&lt;A&gt;",synthetic:true,types:["actix::contextimpl::ContextParts"]},{text:"impl&lt;A, C&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/dev/struct.ContextFut.html\" title=\"struct actix::dev::ContextFut\">ContextFut</a>&lt;A, C&gt;",synthetic:true,types:["actix::contextimpl::ContextFut"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"actix/prelude/enum.SendError.html\" title=\"enum actix::prelude::SendError\">SendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::address::SendError"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/dev/channel/struct.AddressSender.html\" title=\"struct actix::dev::channel::AddressSender\">AddressSender</a>&lt;A&gt;",synthetic:true,types:["actix::address::channel::AddressSender"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/dev/channel/struct.AddressReceiver.html\" title=\"struct actix::dev::channel::AddressReceiver\">AddressReceiver</a>&lt;A&gt;",synthetic:true,types:["actix::address::channel::AddressReceiver"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/dev/struct.Envelope.html\" title=\"struct actix::dev::Envelope\">Envelope</a>&lt;A&gt;",synthetic:true,types:["actix::address::envelope::Envelope"]},{text:"impl&lt;A, M&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/prelude/struct.Request.html\" title=\"struct actix::prelude::Request\">Request</a>&lt;A, M&gt;",synthetic:true,types:["actix::address::message::Request"]},{text:"impl&lt;M&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/prelude/struct.RecipientRequest.html\" title=\"struct actix::prelude::RecipientRequest\">RecipientRequest</a>&lt;M&gt;",synthetic:true,types:["actix::address::message::RecipientRequest"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/dev/struct.Mailbox.html\" title=\"struct actix::dev::Mailbox\">Mailbox</a>&lt;A&gt;",synthetic:true,types:["actix::mailbox::Mailbox"]},{text:"impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/actors/mocker/struct.Mocker.html\" title=\"struct actix::actors::mocker::Mocker\">Mocker</a>&lt;T&gt;",synthetic:true,types:["actix::actors::mocker::Mocker"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.Resolve.html\" title=\"struct actix::actors::resolver::Resolve\">Resolve</a>",synthetic:true,types:["actix::actors::resolver::Resolve"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.Connect.html\" title=\"struct actix::actors::resolver::Connect\">Connect</a>",synthetic:true,types:["actix::actors::resolver::Connect"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.ConnectAddr.html\" title=\"struct actix::actors::resolver::ConnectAddr\">ConnectAddr</a>",synthetic:true,types:["actix::actors::resolver::ConnectAddr"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.Resolver.html\" title=\"struct actix::actors::resolver::Resolver\">Resolver</a>",synthetic:true,types:["actix::actors::resolver::Resolver"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.TcpConnector.html\" title=\"struct actix::actors::resolver::TcpConnector\">TcpConnector</a>",synthetic:true,types:["actix::actors::resolver::TcpConnector"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"actix/actors/resolver/enum.ResolverError.html\" title=\"enum actix::actors::resolver::ResolverError\">ResolverError</a>",synthetic:true,types:["actix::actors::resolver::ResolverError"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.Finish.html\" title=\"struct actix::fut::Finish\">Finish</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::helpers::Finish"]},{text:"impl&lt;A, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.Map.html\" title=\"struct actix::fut::Map\">Map</a>&lt;A, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::map::Map"]},{text:"impl&lt;T, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.Ready.html\" title=\"struct actix::fut::Ready\">Ready</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::ready_fut::Ready"]},{text:"impl&lt;T, E, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.FutureResult.html\" title=\"struct actix::fut::FutureResult\">FutureResult</a>&lt;T, E, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::result::FutureResult"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamFinish.html\" title=\"struct actix::fut::StreamFinish\">StreamFinish</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_finish::StreamFinish"]},{text:"impl&lt;S, F, Fut, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamFold.html\" title=\"struct actix::fut::StreamFold\">StreamFold</a>&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Fut as <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.IntoActorFuture.html#associatedtype.Future\" title=\"type actix::fut::IntoActorFuture::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_fold::StreamFold"]},{text:"impl&lt;S, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamMap.html\" title=\"struct actix::fut::StreamMap\">StreamMap</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_map::StreamMap"]},{text:"impl&lt;S, F, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamThen.html\" title=\"struct actix::fut::StreamThen\">StreamThen</a>&lt;S, F, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.IntoActorFuture.html#associatedtype.Future\" title=\"type actix::fut::IntoActorFuture::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_then::StreamThen"]},{text:"impl&lt;S&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamTimeout.html\" title=\"struct actix::fut::StreamTimeout\">StreamTimeout</a>&lt;S&gt;",synthetic:true,types:["actix::fut::stream_timeout::StreamTimeout"]},{text:"impl&lt;A, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.Then.html\" title=\"struct actix::fut::Then\">Then</a>&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.IntoActorFuture.html#associatedtype.Future\" title=\"type actix::fut::IntoActorFuture::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::then::Then"]},{text:"impl&lt;F&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.Timeout.html\" title=\"struct actix::fut::Timeout\">Timeout</a>&lt;F&gt;",synthetic:true,types:["actix::fut::timeout::Timeout"]},{text:"impl&lt;F, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.FutureWrap.html\" title=\"struct actix::fut::FutureWrap\">FutureWrap</a>&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::FutureWrap"]},{text:"impl&lt;S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamWrap.html\" title=\"struct actix::fut::StreamWrap\">StreamWrap</a>&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::StreamWrap"]},{text:"impl&lt;A, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"actix/fut/enum.Either.html\" title=\"enum actix::fut::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::either::Either"]},{text:"impl&lt;T, E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/io/struct.Writer.html\" title=\"struct actix::io::Writer\">Writer</a>&lt;T, E&gt;",synthetic:true,types:["actix::io::Writer"]},{text:"impl&lt;T, U&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/io/struct.FramedWrite.html\" title=\"struct actix::io::FramedWrite\">FramedWrite</a>&lt;T, U&gt;",synthetic:true,types:["actix::io::FramedWrite"]},{text:"impl&lt;I, S&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/io/struct.SinkWrite.html\" title=\"struct actix::io::SinkWrite\">SinkWrite</a>&lt;I, S&gt;",synthetic:true,types:["actix::io::SinkWrite"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/registry/struct.Registry.html\" title=\"struct actix::registry::Registry\">Registry</a>",synthetic:true,types:["actix::registry::Registry"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/registry/struct.SystemRegistry.html\" title=\"struct actix::registry::SystemRegistry\">SystemRegistry</a>",synthetic:true,types:["actix::registry::SystemRegistry"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/sync/struct.SyncArbiter.html\" title=\"struct actix::sync::SyncArbiter\">SyncArbiter</a>&lt;A&gt;",synthetic:true,types:["actix::sync::SyncArbiter"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/sync/struct.SyncContext.html\" title=\"struct actix::sync::SyncContext\">SyncContext</a>&lt;A&gt;",synthetic:true,types:["actix::sync::SyncContext"]},{text:"impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/utils/struct.Condition.html\" title=\"struct actix::utils::Condition\">Condition</a>&lt;T&gt;",synthetic:true,types:["actix::utils::Condition"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/utils/struct.TimerFunc.html\" title=\"struct actix::utils::TimerFunc\">TimerFunc</a>&lt;A&gt;",synthetic:true,types:["actix::utils::TimerFunc"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"actix/utils/struct.IntervalFunc.html\" title=\"struct actix::utils::IntervalFunc\">IntervalFunc</a>&lt;A&gt;",synthetic:true,types:["actix::utils::IntervalFunc"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()